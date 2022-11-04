# Inspired by: https://github.com/belgattitude/nextjs-monorepo-example

############################################################################
# STAGE 0:                                                                 #
# Specify Node and OS versions; apply the repository label.                #
############################################################################

ARG NODE_VERSION=16
ARG ALPINE_VERSION=3.15
ARG APP_NAME=portfolio
ARG PORT=3000

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS base

ARG APP_NAME

ENV APP_NAME ${APP_NAME}
ENV PORT ${PORT}
ENV CYPRESS_INSTALL_BINARY 0

RUN apk add --no-cache libc6-compat

LABEL org.opencontainers.image.source https://github.com/iacobfred/orega

############################################################################
# STAGE 1:                                                                 #
# Install all workspaces dependencies and generate node_modules folder(s). #
# ------------------------------------------------------------------------ #
# Notes:                                                                   #
#   - This stage relies on buildkit features.                              #
#   - The root .dockerignore must ignore **/node_modules and .yarn/cache.  #
############################################################################

FROM base AS deps

ARG APP_NAME

RUN apk add --no-cache rsync

WORKDIR /deps

COPY yarn.lock .yarnrc.yml ./
COPY .yarn/ ./.yarn/

# Specific to monerepo's as docker COPY command is pretty limited
# we use buidkit to prepare all files that are necessary for install
# and that will be used to invalidate docker cache.
#
# Files are copied with rsync:
#   - All package.json present in the host (root, apps/*, packages/*)
RUN --mount=type=bind,target=/docker-context \
  rsync -amv --delete \
  --exclude='node_modules' \
  --exclude='*/node_modules' \
  --include='package.json' \
  --include='*/' --exclude='*' \
  /docker-context/ /deps/;

# To speed up installations, we override the default yarn cache folder
# and mount it as a buildkit cache mount (builkit will rotate it if needed)
# This strategy allows to exclude the yarn cache in subsequent docker
# layers (size benefit) and reduce packages fetches.
#
# PS:
#  1. Cache mounts can be used in CI (github actions)
#  2. To manually clear the cache
#     > docker builder prune --filter type=exec.cachemount
#
# Does not play well with buildkit on CI
# https://github.com/moby/buildkit/issues/1673
RUN --mount=type=cache,target=/base/.yarn3-cache,id=yarn3-cache \
  NODE_ENV=development YARN_CACHE_FOLDER=/base/.yarn3-cache \
  yarn install --inline-builds

###################################################################
# Stage 2: Build the app                                          #
###################################################################

FROM base AS builder

ARG APP_NAME

ENV NODE_ENV=production
# ENV NEXTJS_IGNORE_ESLINT=1
# ENV NEXTJS_IGNORE_TYPECHECK=0

WORKDIR /base

COPY . .
COPY --from=deps /deps ./

# Optional: if the app depends on global /static shared assets like images, locales...
# RUN yarn workspace web share-static-hardlink
RUN yarn workspace ${APP_NAME} build

# Does not play well with buildkit on CI
# https://github.com/moby/buildkit/issues/1673
# RUN --mount=type=cache,target=/base/.yarn3-cache,id=yarn3-cache \
#   SKIP_POSTINSTALL=1 \
#   YARN_CACHE_FOLDER=/base/.yarn3-cache \
#   yarn workspaces focus web --production

###################################################################
# Stage 3: Extract a minimal image from the build                 #
###################################################################

FROM base AS runner

ARG APP_NAME
ARG PORT

WORKDIR /base/apps/${APP_NAME}

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

RUN apk add --no-cache curl

COPY --from=builder --chown=nextjs:nodejs /base/apps/${APP_NAME}/.next/standalone/ /base/
COPY --from=builder --chown=nextjs:nodejs /base/apps/${APP_NAME}/.next/static /base/apps/${APP_NAME}/.next/static
# Note: The public dir also must be copied from the builder rather than from the host,
# since the service worker files from next-pwa are generated during the build.
COPY --from=builder --chown=nextjs:nodejs /base/apps/${APP_NAME}/public /base/apps/${APP_NAME}/public

RUN test -f server.js || (ls; exit 1)

# Switch to non-root user.
USER nextjs

EXPOSE ${PORT}

ENV NEXT_TELEMETRY_DISABLED 1

# Define health check.
HEALTHCHECK --interval=30s --timeout=7s --start-period=60s --retries=3 \
  CMD ["sh", "-c", "curl --fail http://localhost:${PORT}/ || exit 1"]

# Start the app.
CMD ["node", "server.js"]
