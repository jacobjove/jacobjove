ARG PORT=4321

FROM node:lts-alpine AS base
ENV CYPRESS_INSTALL_BINARY=0
# https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache curl libc6-compat
WORKDIR /app
LABEL org.opencontainers.image.source https://github.com/jacobjove/jacobjove

# Install dependencies only when needed
FROM base AS deps
RUN corepack enable && corepack prepare pnpm
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
ARG PORT
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
ENV PORT=${PORT}
EXPOSE ${PORT}
ENV HOSTNAME="0.0.0.0"
HEALTHCHECK --interval=30s --timeout=7s --start-period=60s --retries=3 \
  CMD ["sh", "-c", "curl --fail http://localhost:${PORT}/ || exit 1"]

CMD ["node", "./dist/server/entry.mjs"]
