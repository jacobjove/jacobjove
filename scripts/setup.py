#!/usr/bin/python3

import sys

# Syntax used in this script requires Python 3.10+.
if sys.version_info < (3, 10):
    raise ValueError("This script requires Python 3.10+.")

import argparse
import re
import os
import platform
import subprocess
from pathlib import Path
import getpass
from time import sleep

# NOTE: This script should able to run in a fresh environment before dependencies are installed.
ROOT_DIR = Path(__file__).parent.parent
VENV_PYTHON_PATH = ROOT_DIR / ".venv" / "bin" / "python"
using_venv = sys.executable.startswith(str(VENV_PYTHON_PATH))

parser = argparse.ArgumentParser(
    description="Arguments for setup.py",
    formatter_class=argparse.ArgumentDefaultsHelpFormatter,
)

parser.add_argument(
    "--no-input",
    dest="no_input",
    action="store_true",
    help="Run script without any user input",
)
parser.add_argument(
    "--no-deps",
    dest="no_deps",
    action="store_true",
    help="Skip dependency installation",
)

config = vars(parser.parse_args())
interactive = not config["no_input"]
no_deps = config["no_deps"]
install_python_deps = not no_deps

DJANGO_PROJECT_NAME = "tempo"
SHELL_EXECUTABLE = "/bin/bash"
POETRY_VERSION = "1.6.1"
NVM_VERSION = "0.39.5"
NODE_VERSION = "18"
VOLUMES_DIRNAME = "_volumes"
INIT_VOLUME_DIRNAME = "init"
VOLUME_DIRNAMES = ("backups", INIT_VOLUME_DIRNAME, "logs", "media", "static")

# https://python-poetry.org/docs/master/#installing-with-the-official-installer
POETRY_BIN = "$HOME/.local/bin"
INFO_BY_OS = {
    "Darwin": {
        "name": "MacOS",
        "shell_executable": "/bin/bash",
        "poetry_bin": POETRY_BIN,
    },
    "Linux": {
        "name": "Linux",
        "shell_executable": "/bin/bash",
        "poetry_bin": POETRY_BIN,
    },
}

os_name = platform.system()
print(f"Operating system: {os_name}")
if os_name not in INFO_BY_OS.keys():
    raise ValueError(f"Unsupported operating system: {os_name}")

shell_profile = Path.home() / ".bash_profile"
info = INFO_BY_OS[os_name]

root_dir = ROOT_DIR
if not root_dir.exists():
    raise ValueError(f"Root directory does not exist: {root_dir!s}")

scripts_dir = root_dir / "scripts"
if not scripts_dir.exists():
    raise ValueError(f"Scripts directory does not exist: {scripts_dir!s}")

volumes_dir = root_dir / VOLUMES_DIRNAME
db_init_dir = volumes_dir / INIT_VOLUME_DIRNAME / "postgres"  # TODO

volumes_dir.mkdir(exist_ok=True)
for volume_dirname in VOLUME_DIRNAMES:
    (volumes_dir / volume_dirname).mkdir(exist_ok=True)

dotenv_file = root_dir / ".env"

if not dotenv_file.exists():
    raise ValueError(f"{dotenv_file!s} does not exist.")

profiles = [
    (Path.home() / profile)
    for profile in (".bashrc", ".bash_profile", ".zshrc", ".profile")
    if (Path.home() / profile).exists()
]

# TODO: Confirm this is correct.
selected_profile = Path.home() / (".bash_profile" if os_name == "Darwin" else ".bashrc")
if not selected_profile.exists():
    raise ValueError(f"Shell profile does not exist: {selected_profile!s}")

django_project_dir = root_dir / DJANGO_PROJECT_NAME
if not django_project_dir.exists():
    raise ValueError(f"Django project directory does not exist: {django_project_dir!s}")


def rerun(args: None | list[str] = None) -> None:
    print("Rerunning in virtual environment ...")
    args = sys.argv + (args or [])
    os.execv(VENV_PYTHON_PATH, ["python", *args])


if VENV_PYTHON_PATH.exists() and not using_venv:
    rerun(sys.argv)


class SetupHelper:
    def __init__(self):
        self.cwd = root_dir

    def run(
        self,
        command: str,
        shell: bool = True,
        use_profile: bool = False,
        suppress_output: bool = False,
    ) -> str:
        _command = command
        if use_profile:
            shell = True
            _command = f"source {selected_profile} && {command}"
        elif re.search(r"[;&\|]", command):
            shell = True
        elif not shell:
            _command = command.split(" ")
        output = subprocess.run(
            _command,
            shell=shell,
            executable=SHELL_EXECUTABLE,
            cwd=self.cwd,
            check=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
        ).stdout.strip()
        if not suppress_output:
            print(output)
        return output

    def Popen(
        self,
        command: list[str],
    ) -> subprocess.Popen[str]:
        _command = command
        return subprocess.Popen(
            _command,
            cwd=self.cwd,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
        )

    def bring_to_fg(
        self,
        process: subprocess.Popen[str],
    ) -> None:
        print()
        while process.stdout:
            output = process.stdout.read(1)
            print(output, end="", flush=True)
            if not output:
                break
        print()
        sleep(2)  # UX


helper = SetupHelper()

print(f"User: {getpass.getuser()}")

branch = helper.run("git branch --show-current", suppress_output=True)

# When run in GitHub Actions, the code is in detached HEAD state,
# but the branch name can be extracted from GITHUB_REF.
if not branch:
    if ref := os.getenv("GITHUB_HEAD_REF"):
        print(f"Extracting branch name from GITHUB_HEAD_REF: {ref} ...")
    elif ref := os.getenv("GITHUB_REF"):
        print(f"Extracting branch name from GITHUB_REF: {ref} ...")
    if not ref:
        raise ValueError("Could not determine branch name")
    branch = ref.split("/")[-1]

print(f"Branch: {branch}")

docker_compose_pull = helper.Popen(["docker", "compose", "pull", "--ignore-buildable"])
docker_compose_tempo_build = helper.Popen(["docker", "compose", "build", "tempo"])

if install_python_deps:
    # Check for absence of the .python-version file.
    if not (_PYTHON_VERSION_FILE := (root_dir / ".python-version")).exists():
        raise ValueError(f"{_PYTHON_VERSION_FILE!s} does not exist.")

    with _PYTHON_VERSION_FILE.open() as f:
        PYTHON_VERSION = f.read().strip()

    current_version = (
        f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}"
    )
    if current_version != PYTHON_VERSION:
        try:
            pyenv_versions = helper.run("pyenv versions", use_profile=True, suppress_output=True)
        except subprocess.CalledProcessError:
            print("Installing pyenv ...")
            helper.run("curl https://pyenv.run | bash")
            pyenv_script = (
                'export PYENV_ROOT="$HOME/.pyenv"\n'
                'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"\n'
                'eval "$(pyenv init -)"'
            )
            for profile in profiles:
                with profile.open("r+") as f:
                    contents = f.read()
                    if "pyenv" in contents:
                        continue
                    if (
                        interactive
                        and input(f"Adding pyenv script to {profile!s}. Continue? [Y/n] ") == "n"
                    ):
                        sys.exit()
                    _ = f.write(f"{contents}\n{pyenv_script}\n")
            pyenv_versions = helper.run("pyenv versions", use_profile=True, suppress_output=True)
        if PYTHON_VERSION not in pyenv_versions:
            print(f"Installing Python {PYTHON_VERSION} ...")
            helper.run(f"pyenv install {PYTHON_VERSION}")

    # Install poetry if it is not already installed.
    try:
        poetry_version_info = helper.run("poetry --version", suppress_output=True)
    except subprocess.CalledProcessError:
        # https://python-poetry.org/docs/master/#installing-with-the-official-installer
        # export POETRY_HOME="$HOME/.poetry"
        helper.run(
            f"curl -sSL https://install.python-poetry.org | python3 - --version {POETRY_VERSION}"
        )
        poetry_bin = info["poetry_bin"]
        for profile in profiles:
            with profile.open("r+") as f:
                contents = f.read()
                if poetry_bin in contents:
                    continue
                if (
                    interactive
                    and input(f"Adding poetry to PATH in {profile!s}. Continue? [Y/n] ") == "n"
                ):
                    sys.exit()
                _ = f.write(f'{contents}\nexport PATH="{poetry_bin}:$PATH"\n')
        poetry_version_info = helper.run("poetry --version")

    if POETRY_VERSION not in poetry_version_info:
        helper.run(f"poetry self update --no-interaction {POETRY_VERSION}")

    helper.bring_to_fg(helper.Popen(["poetry", "install", "--no-root", "--no-interaction"]))

    rerun(["--no-deps"])


if not using_venv:
    raise ValueError("This script should be run using {VENV_PYTHON_PATH!s}")

print("Virtual environment is functional.")

# Set up Node Version Manager (NVM).
try:
    nvm_version = helper.run("nvm --version", use_profile=True, suppress_output=True)
    print(f"NVM version: {nvm_version}")
except subprocess.CalledProcessError:
    for profile in profiles:
        # It won't actually install multiple times; this is just to ensure the
        # script is added to all of the profiles.
        # https://github.com/nvm-sh/nvm#installing-and-updating
        helper.run(
            f"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v{NVM_VERSION}/install.sh "
            f'| PROFILE="{profile!s}" bash -'
        )

helper.run(
    "nvm install && nvm use",
    use_profile=True,
    suppress_output=True,
)

helper.run(
    "corepack enable && corepack prepare pnpm@latest --activate",
    use_profile=True,
    # suppress_output=True,
)

# Check Node version.
try:
    node_version = helper.run("node --version", suppress_output=True, use_profile=True).strip("v")
    print(f"Node version: {node_version}")
except subprocess.CalledProcessError:
    print("Failed to activate required Node version.")
    sys.exit(1)

# Check PNPM version.
try:
    pnpm_version = helper.run("pnpm --version", suppress_output=True)
    print(f"PNPM version: {pnpm_version}")
except subprocess.CalledProcessError:
    print("Installing pnpm ...")
    helper.run("curl -fsSL https://get.pnpm.io/install.sh | sh -")

helper.bring_to_fg(helper.Popen(["pnpm", "install"]))
helper.bring_to_fg(docker_compose_pull)
helper.bring_to_fg(docker_compose_tempo_build)

helper.bring_to_fg(helper.Popen(["docker", "compose", "up", "-d", "services", "web"]))

print("To start the Django server, run:")
print(f"    pnpm dev --filter {DJANGO_PROJECT_NAME}")

# TODO
# # Update package managers
# echo "Checking package manager ..."
# # Install/update Homebrew
# brew help &>/dev/null || {
#   echo "Installing Homebrew ..."
#   bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
#   if [[ "$os" == "$LINUX" ]]; then
#     _append_to_sh_profile 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"'
#   fi
# }
# brew update
# outdated_formulae=$(brew outdated)

# function brew_install {
#   if brew ls --versions "$1" >/dev/null; then
#     echo "$outdated_formulae" | grep --quiet "$1" && {
#       echo "Upgrading $1..."
#       brew upgrade "$1"
#     }
#   else
#     echo "Installing $1..."
#     HOMEBREW_NO_AUTO_UPDATE=1 brew install "$1"
#   fi
# }

# if [[ "$os" == "$MAC_OS" ]]; then
#   # Update software dependencies through XCode
#   echo "Updating software ..."
#   xcodebuild -version &>/dev/null || {
#     xcode-select --install || {
#       error "
#         XCode is required. Rerun this script after installing XCode:
#           https://apps.apple.com/us/app/xcode/id497799835?mt=12
#       "
#     }
#   }
#   softwareupdate -l
# fi

# if [[ "$os" == "$MAC_OS" ]]; then
#   echo "Updating packages ..."
#   # PostgreSQL
#   brew tap homebrew/services && brew_install postgresql@14
#   # Other packages
#   brew_install ctags
#   brew_install fdupes
#   brew_install graphviz
#   brew_install openssl@1.1
#   brew_install rust
#   brew install libjpeg zlib grep gnu-sed jq
#   # https://opam.ocaml.org/doc/Install.html
#   brew install gpatch
#   brew install opam
#   # Modify PATH to use GNU Grep over MacOS Grep.
#   # shellcheck disable=SC2016
#   _append_to_sh_profile 'export PATH="/usr/local/opt/grep/libexec/gnubin:$PATH"'
# elif [[ "$os" == "$LINUX" ]]; then
#   add-apt-repository ppa:avsm/ppa
#   sudo apt update -y && sudo apt upgrade -y
#   # Basic dev dependencies
#   sudo apt install -y bash-completion curl git wget vim ctags fdupes opam
#   # PostgreSQL
#   wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
#   echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" |
#   sudo tee /etc/apt/sources.list.d/pgdg.list
#   # All other dependencies
#   sudo apt update -y
#   sudo apt install -y --allow-downgrades \
#   build-essential \
#   make \
#   graphviz graphviz-dev \
#   libbz2-dev libffi-dev liblzma-dev libssl-dev \
#   libreadline-dev \
#   libsqlite3-dev \
#   libncurses5-dev libncursesw5-dev \
#   llvm \
#   postgresql-client-common postgresql-client-14 \
#   python-openssl \
#   tk-dev \
#   xz-utils \
#   zlib1g-dev || _error "Unable to install one or more required packages."
# fi

# # Install watchman.
# brew_install watchman

# # Note: These are referenced multiple times in this script.
# declare -a writable_dirs=(
#   "$VOLUMES_DIR/db/backups"
#   "$VOLUMES_DIR/db/init"
#   "$VOLUMES_DIR/media"
#   "$VOLUMES_DIR/static"
#   "$VOLUMES_DIR/redirects"
#   "$ROOT_DIR/frontend/.next"
# )

# for writable_dir in "${writable_dirs[@]}"; do
#   mkdir -p "$writable_dir" &>/dev/null
# done

# if [[ "$os" == "$LINUX" ]]; then
#   # Add user to www-data group.
#   groups "$USER" | grep -q www-data || {
#     echo "Adding $USER to the www-data group ..."
#     sudo usermod -a -G www-data "$USER"
#     groups "$USER" | grep -q www-data || {
#       _error "Failed to add $USER to the www-data group."
#     }
#   }
#   # shellcheck disable=SC2010
#   ls -ld "$ROOT_DIR" | grep -q "$USER www-data" || {
#     echo "Granting the www-data group permission to write in project directories ..."
#     sudo chown -R "$USER":www-data "$ROOT_DIR"
#   }
#   for writable_dir in "${writable_dirs[@]}"; do
#     # shellcheck disable=SC2010
#     echo "Checking write permissions for $writable_dir ..."
#     sudo -u www-data test -w "$writable_dir" || {
#       ls -ld "$writable_dir" | grep -q "$USER www-data" || {
#         echo "Granting ownership of $writable_dir to ${USER}:www-data ..."
#         sudo chown -R "$USER":www-data "$writable_dir"
#       }
#       echo "Granting the www-data group permission to write in $writable_dir ..."
#       sudo chmod g+w -R "$writable_dir"
#     }
#   done
# fi

# # Set up Rclone (https://rclone.org/).
# rclone version &>/dev/null || {
#   echo "Creating .tmp dir ..."
#   # shellcheck disable=SC2164
#   mkdir -p .tmp && cd .tmp
#   echo "Downloading rclone setup script ..."
#   curl https://rclone.org/install.sh --output install-rclone.sh
#   cd ..
#   echo "Installing rclone ..."
#   sudo bash .tmp/install-rclone.sh
#   echo "Cleaning up ..."
#   rm -r .tmp
# }

# # Install dotenv linter.
# curl -sSfL https://raw.githubusercontent.com/dotenv-linter/dotenv-linter/master/install.sh | sudo sh -s -- -b /usr/local/bin

# # Disable THP so it doesn't cause issues for Redis containers.
# if test -f /sys/kernel/mm/transparent_hugepage/enabled; then
#   echo "Disabling THP ..."
#   sudo bash -c "echo madvise > /sys/kernel/mm/transparent_hugepage/enabled"
# fi

# if [[ "$os" == "$MAC_OS" ]]; then
#   # Enable mounting volumes within ~/modularhistory.
#   docker_settings_file="$HOME/Library/Group Containers/group.com.docker/settings.json"
#   if [[ -f "$docker_settings_file" ]]; then
#     sharing_enabled=$(jq ".filesharingDirectories | contains([\"$HOME/modularhistory\"])" < "$docker_settings_file")
#     if [[ $sharing_enabled = true ]]; then
#       echo "Docker file sharing is enabled for $HOME/modularhistory."
#     else
#       echo "Enabling file sharing for $ROOT_DIR ..."
#       jq ".filesharingDirectories += [\"$HOME/modularhistory\"]" < "$docker_settings_file" > settings.json.tmp &&
#       mv settings.json.tmp "$docker_settings_file"
#       test "$(docker ps -q)" && {
#         echo "Stopping containers ..."
#         docker compose down
#       }
#       test -z "$(docker ps -q)" && {
#         echo "Quitting Docker ..."
#         osascript -e 'quit app "Docker"'
#         sleep 9
#         echo "Starting Docker ..."
#         open --background -a Docker
#         while ! docker system info > /dev/null 2>&1; do sleep 2; done
#       }
#     fi
#   else
#     echo "Could not find Docker settings file; skipping enabling Docker file sharing ... "
#   fi
# fi

# [[ "$TESTING" = true ]] && {
#   echo "
#     Finished testing the setup script. Omitted the docker-dependent steps
#     of building images & starting containers, syncing media, etc.
#   "
#   exit 0
# }

# # Install configuration file for PyInvoke.
# cp .config/invoke.yaml "$HOME/.invoke.yaml"

# # Add container names to /etc/hosts.
# poetry run invoke setup.update-hosts

# # Seed a .env file.
# poetry run invoke seed --no-db

# # Check Docker's memory cap
# [[ "$os" == "$MAC_OS" ]] && {
#   mem_limit=$(docker stats --format "{{.MemUsage}}" --no-stream | head -1 | gsed -r -e 's/.+ \/ ([0-9]+).*/\1/')
#   if [[ "$mem_limit" -lt 2 ]]; then
#     _print_red "
#       The configured memory limit for Docker is ${mem_limit}. Please increase the memory limit to 3–4 GB.
#     "
#     echo "
#       To do so, open the Docker Desktop application, go to settings, and click Resources.
#       Then adjust the memory allocation, and click the Apply & Restart button.
#     "
#     read -rp "Hit enter to continue. " _
#   fi
# }


# # Seed init.sql file.
# prompt="Seed db [Y/n]? "
# if [[ -f "$VOLUMES_DIR/db/init/init.sql" ]]; then
#   prompt="Seed new init.sql file [Y/n]? "
# fi
# read -rp "$prompt" CONT
# if [[ ! "$CONT" = "n" ]] && [[ ! $TESTING = true ]]; then
#   # shellcheck disable=SC2015
#   poetry run invoke db.seed --remote --migrate || {
#     _print_red "Failed to seed database."
#     _prompt_to_rerun
#     _error "
#       Failed to seed database. Try running the following in a new shell:

#         ${BOLD}cd ~/modularhistory && poetry run invoke seed
#     "
#   }
# fi

# read -rp "Sync media [Y/n]? " CONT
# if [[ ! "$CONT" = "n" ]] && [[ ! $TESTING = true ]]; then
#   # shellcheck disable=SC2015
#   poetry run invoke media.sync && echo "Finished syncing media." || {
#     _print_red "
#       Failed to sync media. Try running the following in a new shell:

#         ${BOLD}cd ~/modularhistory && poetry run invoke media.sync

#     "
#   }
# fi
