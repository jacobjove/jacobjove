##################################
# BASE
##################################

FROM node:16.14.2 AS base

LABEL org.opencontainers.image.source https://github.com/iacobfred/selfbuilder

##################################
# BUILDER
##################################

FROM base AS builder

ENV NODE_OPTIONS --max_old_space_size=4096

RUN mkdir -p /root/apps/web /root/libs

WORKDIR /root/apps/web

# Copy package.json and package-lock.json to the container.
COPY package-lock.json .
COPY apps/web/package.json .

# Install dependencies including dev dependencies so the project can be built.
RUN NODE_ENV=development npm ci

# Add installed node_modules to the PATH.
ENV PATH /root/apps/web/node_modules/.bin:$PATH

# Copy necessary files prior to building.
COPY tsconfig.base.json /root/
COPY libs /root/libs
COPY apps/web /root/apps/web
COPY .env /root/apps/web/.env

# Build app for production.
RUN NODE_ENV=production npm run build

##################################
# NX BUILDER
##################################

# FROM base AS nx-builder

# ENV NODE_OPTIONS --max_old_space_size=4096

# WORKDIR /nx

# # Copy package.json and package-lock.json to the container.
# COPY package*.json .

# # https://joshtronic.com/2022/07/10/husky-command-not-found-with-npm-install-production/
# RUN npm set-script prepare ''

# # Install dependencies including dev dependencies so the project can be built.
# RUN NODE_ENV=development npm ci

# # Add installed node_modules to the PATH.
# ENV PATH /nx/node_modules/.bin:$PATH

# # Copy all files prior to building.
# COPY . .

# # Build app for production.
# RUN NODE_ENV=production npm run build

##################################
# RUNNER
##################################

FROM base as runner

WORKDIR /app

COPY --from=builder --chown=www-data:www-data /root/apps/web/.next/standalone .
COPY --from=builder --chown=www-data:www-data /root/apps/web/.next/static /app/.next/static
# Note: The public dir also must be copied from the builder rather than from the host,
# since the service worker files from next-pwa are generated during the build.
COPY --from=builder --chown=www-data:www-data /root/apps/web/public /app/public

# Remove dotenv file from image.
RUN rm .env

# Switch to non-root user.
USER www-data

# Set NODE_ENV to production by default.
ENV NODE_ENV production

# Define health check.
HEALTHCHECK --interval=30s --timeout=7s --start-period=60s --retries=3 \
  CMD ["sh", "-c", "curl --fail http://localhost:${NEXTJS_PORT}/ || exit 1"]

# Start the app.
CMD ["node", "server.js"]
