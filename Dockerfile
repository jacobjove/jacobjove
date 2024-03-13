ARG NODE_VERSION=18
ARG PNPM_VERSION=8.15.3
ARG PORT=3000

# TODO: https://github.com/mpash/pnpm-next-docker/blob/main/Dockerfile

FROM node:${NODE_VERSION}-alpine AS base

ARG PNPM_VERSION

ENV PORT=${PORT} CYPRESS_INSTALL_BINARY=0

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache curl libc6-compat rsync

RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION}

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

LABEL org.opencontainers.image.source https://github.com/iacobfred/jacobjove

# Install dependencies only when needed
FROM base AS deps

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml .npmr[c] ./

RUN \
  if [ -f pnpm-lock.yaml ]; then pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN pnpm build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: The public dir also must be copied from the builder rather than from the host,
# since the service worker files from next-pwa are generated during the build.
COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN test -f server.js || (ls; exit 1)

USER nextjs

EXPOSE 3000

ENV PORT 3000

ENV NEXT_TELEMETRY_DISABLED 1

ENV HOSTNAME "0.0.0.0"

# Define health check.
HEALTHCHECK --interval=30s --timeout=7s --start-period=60s --retries=3 \
  CMD ["sh", "-c", "curl --fail http://localhost:${PORT}/ || exit 1"]

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
