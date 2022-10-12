##################################
# BASE
##################################

FROM node:16.14.2 AS base

ARG PNPM_VERSION=7.13.2
ARG APP_NAME

LABEL org.opencontainers.image.source https://github.com/iacobfred/orega

ENV DOCKERIZED=true
ENV ROOT_DIR /root
ENV APP_NAME ${APP_NAME}
ENV APP_DIR ${ROOT_DIR}/apps/${APP_NAME}
ENV APP_TMP_DIR ${ROOT_DIR}/tmp/${APP_NAME}
ENV NODE_ENV production

RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

##################################
# PNPM
##################################

FROM base AS builder

WORKDIR ${ROOT_DIR}

RUN mkdir -p ${APP_TMP_DIR}

# https://pnpm.io/cli/fetch
COPY pnpm-lock.yaml ./
RUN NODE_ENV=development pnpm fetch
COPY . .
RUN NODE_ENV=development pnpm install -r --prefer-offline --frozen-lockfile --filter ${APP_NAME}

# https://pnpm.io/cli/deploy
RUN NODE_ENV=development pnpm --filter ${APP_NAME} deploy ${APP_TMP_DIR}

WORKDIR ${APP_TMP_DIR}

# Build the app.
RUN export $(cat .env | grep SENTRY) && NODE_ENV=${NODE_ENV} pnpm run build

# Remove dotenv file from image.
RUN rm .env

##################################
# RUNNER
##################################

FROM base as runner

WORKDIR ${APP_DIR}

# Copy compiled JavaScript from the builder stage.
COPY --from=builder --chown=www-data:www-data ${APP_TMP_DIR}/.next/standalone .
COPY --from=builder --chown=www-data:www-data ${APP_TMP_DIR}/.next/static ${APP_DIR}/.next/static
# Note: The public dir also must be copied from the builder (rather than from the host),
# since the service worker files from next-pwa are generated during the build.
COPY --from=builder --chown=www-data:www-data ${APP_TMP_DIR}/public ${APP_DIR}/public

# TODO: Remove this line once the issue is fixed.
# COPY --from=builder --chown=www-data:www-data ${APP_TMP_DIR}/node_modules ./node_modules/

# Expose Next.js web application port.
EXPOSE ${PORT}

# Switch to non-root user.
USER www-data

# Define health check.
HEALTHCHECK --interval=30s --timeout=7s --start-period=60s --retries=3 \
  CMD curl --fail http://localhost:${PORT}/ || exit 1

# Start the app.
CMD ["node", "server.js"]
