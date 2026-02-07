ARG PORT=3000

FROM node:lts-alpine AS base
ENV PORT=${PORT} CYPRESS_INSTALL_BINARY=0
# https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache curl libc6-compat rsync
RUN corepack enable && corepack prepare pnpm
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
WORKDIR /app
LABEL org.opencontainers.image.source https://github.com/jacobjove/jacobjove

# Install dependencies only when needed
FROM base AS deps
COPY package.json pnpm-lock.yaml .npmr[c] ./
RUN \
  if [ -f pnpm-lock.yaml ]; then pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi; pnpm install --prod

# Rebuild the source code only when needed
FROM deps AS builder
COPY . .
RUN pnpm build

# Production image, copy all the files and run next
FROM base AS runtime
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
ENV PORT 3000
EXPOSE 3000
ENV HOSTNAME "0.0.0.0"
HEALTHCHECK --interval=30s --timeout=7s --start-period=60s --retries=3 \
  CMD ["sh", "-c", "curl --fail http://localhost:${PORT}/ || exit 1"]

CMD ["node", "./dist/server/entry.mjs"]
