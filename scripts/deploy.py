#!/usr/bin/python3

import argparse
import getpass
import json
import os
import subprocess
from time import sleep
from typing import Any

print(f"User: {getpass.getuser()}")

parser = argparse.ArgumentParser(
    description="Arguments for deploy.py",
    formatter_class=argparse.ArgumentDefaultsHelpFormatter,
)

parser.add_argument(
    "app",
    action="store",
    help="Name of app to deploy",
)
parser.add_argument(
    "--sha",
    dest="sha",
    action="store",
    help="SHA tag to deploy",
)
parser.add_argument(
    "--token",
    dest="token",
    action="store",
    help="PAT for accessing GitHub Container Registry",
)
parser.add_argument(
    "--continue-on-error",
    dest="continue_on_error",
    action="store_true",
    default=False,
    help="Continue the deploy process even if an error occurs.",
)
parser.add_argument(
    "--services-to-pull",
    dest="services_to_pull",
    action="store",
    default="",
    help="Comma-delimited list of services to pull with the specified SHA",
)
parser.add_argument(
    "--services-to-start",
    dest="services_to_start",
    action="store",
    default="",
    # Specify containers to start IF NOT ALREADY RUNNING, in order of startup.
    # "elasticsearch", "tempo", "celery", "celery_beat", "next")
    help="Comma-delimited list of services to start",
)

config = vars(parser.parse_args())

os.environ["COMPOSE_PROJECT_NAME"] = config["app"]


def parse_csv(csv: str) -> list[str]:
    return [item.strip() for item in csv.strip().split(",") if item.strip()]


if (app := config.pop("app", os.environ.get("APP"))) is None:
    raise ValueError("App name must be specified")
if (sha := config.pop("sha", os.environ.get("SHA"))) is None:
    raise ValueError("SHA must be specified")
if (pat := config.pop("token", os.environ.get("PAT"))) is None:
    raise ValueError("PAT must be specified")

continue_on_error = bool(config.pop("continue_on_error", False))

CORE_SERVICES = ("tempo", "dashboard", "storefront")

services_to_pull = parse_csv(str(config.pop("services_to_pull", ""))) or [*CORE_SERVICES]

print(f"Services to pull: {services_to_pull}")

services_to_start_if_not_running = parse_csv(str(config.pop("services_to_start", ""))) or [
    *CORE_SERVICES
]

print(f"Services to start: {services_to_start_if_not_running}")

# Specify containers to deploy with zero downtime, in order of startup.
# NOTE: These containers will briefly have two instances running simultaneously.
# This means celery_beat cannot be included and must be deployed separately (with downtime).
services_to_deploy_without_downtime = set(
    name for name in {"tempo", "storefront"} if name in services_to_start_if_not_running
)

MARKERS_OF_POOR_HEALTH = ("Exit 1", "unhealthy", "starting")


def run(
    command: list[str],
    check: bool = True,
    suppress_output: bool = False,
) -> str:
    try:
        output = (
            subprocess.run(
                command,
                check=check,
                capture_output=True,
                text=True,
            ).stdout.strip()
            or ""
        )
        if not suppress_output:
            print(output)
        return output
    except subprocess.CalledProcessError as err:
        if continue_on_error:
            # TODO: red
            print(err)
            return ""
        exit(1)


# TODO: fix permissions errors so can run without sudo...
# nginx: [alert] could not open error log file: open() "/var/log/nginx/error.log" failed (13: Permission denied)
# 2023/12/31 07:27:10 [warn] 2632738#2632738: the "user" directive makes sense only if the master process runs with super-user privileges, ignored in /etc/nginx/nginx.conf:1
# 2023/12/31 07:27:10 [emerg] 2632738#2632738: cannot load certificate "/etc/letsencrypt/live/kwstriping.com/fullchain.pem": BIO_new_file() failed (SSL: error:8000000D:system library::Permission denied:calling fopen(/etc/letsencrypt/live/kwstriping.com/fullchain.pem, r) error:10080002:BIO routines::system lib)
def reload_nginx() -> None:
    """Reload the nginx configuration file without downtime."""
    # https://nginx.org/en/docs/beginners_guide.html#control
    try:
        subprocess.run(["nginx", "-s", "reload"], check=True)
    except subprocess.CalledProcessError:
        print("Failed to reload nginx config file.")
        # if continue_on_error:
        #     return
        # exit(1)


def wait_for_health(service_name: str):
    healthy = False
    timeout = 300
    interval = 15
    waited = 0
    while not healthy:
        print(f"Waiting for {service_name} to be healthy (total waited: {waited}s) ...")
        output = run(["docker", "compose", "ps"], suppress_output=True)
        healthy = not any(marker in output for marker in MARKERS_OF_POOR_HEALTH)
        if not healthy:
            if waited > timeout:
                run(["docker", "compose", "ps"])
                run(["docker", "compose", "logs", service_name])
                print()
                print("Timed out waiting for containers to be healthy.")
                if continue_on_error:
                    break
                exit(1)
            if waited % 2 == 0:
                run(["docker", "compose", "logs", "--tail", "20", service_name])
            sleep(interval)
            waited += interval


# Determine which services are not currently running and need to be started.
services_to_start: list[str] = [*services_to_start_if_not_running]
ps_output = run(["docker", "compose", "ps"], suppress_output=True)
for service_name in services_to_deploy_without_downtime:
    for line in ps_output:
        if service_name in line and "Up" in line:
            services_to_start.remove(service_name)
            break

referenced_service_names = {
    *services_to_pull,
    *services_to_start_if_not_running,
    *services_to_deploy_without_downtime,
}
print(f"Referenced service names: {referenced_service_names}")

service_names = (
    run(["docker", "compose", "config", "--services"], suppress_output=True).strip().splitlines()
)
for service_name in referenced_service_names:
    if service_name not in service_names:
        print(f"Service {service_name} not found in docker-compose.yml")
        if not continue_on_error:
            exit(1)

image_names: dict[str, str] = {}
container_names: dict[str, str] = {}

services_config: dict[str, dict[str, Any]] = json.loads(
    run(["docker", "compose", "config", "--format", "json"], suppress_output=True)
)["services"]

for service_name in service_names:
    print(f'Reading config for service "{service_name}" ...')
    image_names[service_name] = services_config[service_name]["image"]

# Login to the container registry.
print("")
print("Logging in to the container registry...")
run(["docker", "login", "ghcr.io", "-u", "jacob.t.jove@gmail.com", "-p", pat])

# Pull new images.
print("")
print(f"Pulling new images for version {sha} ...")

for service_name in services_to_pull:
    run(["docker", "compose", "pull", "--quiet", service_name])
    image_name = image_names[service_name]
    try:
        subprocess.run(
            ["docker", "image", "inspect", image_name],
            capture_output=True,
            check=True,
        )
        print(f"Successfully pulled {image_name}")
    except subprocess.CalledProcessError:
        print(f"Image {image_name} is not present.")
        if not continue_on_error:
            exit(1)

started_services: "set[str]" = set()

# Start up containers that are not already running.
ps_output = run(["docker", "compose", "ps"], suppress_output=True)
for service_name in services_to_start:
    for line in ps_output:
        if service_name in line and "Up" in line:
            break
    else:
        print("")
        print(f"Starting {service_name} ...")
        run(["docker", "compose", "up", "-d", "--no-recreate", service_name])
        started_services.add(service_name)

print("Finished starting services.")

# Take down celery_beat to avoid triggering a periodic task during the deploy.
# TODO
# docker compose rm --stop --force celery_beat

# Deploy new containers.
old_container_ids = {}
for service_name in services_to_deploy_without_downtime:
    if service_name in started_services:
        continue
    print()
    print(f"Deploying {service_name} ...")
    old_container_ids[service_name] = run(
        ["docker", "ps", "-f", f"name={service_name}", "-q"],
    ).splitlines()[-1]
    run(
        [
            "docker",
            "compose",
            "up",
            "-d",
            "--no-deps",
            "--scale",
            f"{service_name}=2",
            "--no-recreate",
            service_name,
        ],
        check=True,
    )
    _container_name = run(
        # TODO: do the curly braces need to be escaped?
        ["docker", "ps", "-f", f"name={service_name}", "--format", "{{.Names}}"],
        check=True,
    ).splitlines()[-1]

    # new_container_name="${container_name/iacobfred_/iacobfred_${new}_}"
    # docker rename "$container_name" "$new_container_name"

    run(["docker", "compose", "ps"])

    wait_for_health(_container_name)


# Start celery_beat.
# TODO
# docker compose up -d --no-deps --no-recreate "celery_beat"
# wait_for_health "celery_beat"

print()
print("Finished deploying new containers.")
print()
run(["docker", "compose", "ps"])

# Reload nginx to begin sending traffic to the new containers.
reload_nginx()

# Stop and remove the old containers.
print()
print("Removing old containers...")
for old_container_id in old_container_ids.values():
    run(["docker", "stop", old_container_id])
    run(["docker", "rm", old_container_id])
for service_name in services_to_deploy_without_downtime:
    run(
        [
            "docker",
            "compose",
            "up",
            "-d",
            "--no-deps",
            "--scale",
            f"{service_name}=1",
            "--no-recreate",
            service_name,
        ],
        check=True,
    )

print()
print("Finished removing old containers.")
print()
run(["docker", "compose", "ps"])

print()
# Reload nginx to stop trying to send traffic to the old containers.
reload_nginx()
print()

# Confirm all containers are running.
for service_name in referenced_service_names:
    # TODO
    # docker compose ps | grep "$container" | grep -q "Up" || {
    #     echo "WARNING: ${container} unexpectedly is not running. Starting..."
    #     docker compose up -d "$container"
    #     wait_for_health "$container"
    # }
    wait_for_health(service_name)

# Prune images.
run(["docker", "image", "prune", "-a", "-f"], check=False)
run(["docker", "system", "prune", "-f"])

print()
run(["docker", "compose", "ps"])
print()
print("Done.")
