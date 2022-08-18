##################################
# BASE
##################################

FROM node:18 AS base

ENV PORT 3000

ARG NODE_ENV=development

# ARG DATABASE_URL="postgresql://postgres:password@localhost:5432/db?schema=public&sslmode=prefer"
# ENV DATABASE_URL $DATABASE_URL

# Create app directory.
RUN mkdir -p /app

# Define the working directory of the container.
WORKDIR /app

##################################
# BUILDER
##################################

FROM base AS builder

# Copy NODE_ENV from the previous stage.
ARG NODE_ENV

ENV NODE_OPTIONS --max_old_space_size=4096

# Copy package.json and package-lock.json to the container.
COPY package*.json /app/

# Install dependencies.
# Always use NODE_ENV=development so Typescript etc. are installed for building
RUN npm set cache .npm; NODE_ENV=development npm ci || \
  (npm cache clean -f && NODE_ENV=development npm ci)

# Copy source files.
COPY . /app

# Build app.
RUN NODE_ENV=${NODE_ENV} npm run build

##################################
# RUNNER
##################################

FROM base

LABEL org.opencontainers.image.source https://github.com/iacobfred/SelfBuilder

# Copy NODE_ENV from the previous stage.
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

# Create app directory.
RUN mkdir -p /app

# Define the working directory of the container.
WORKDIR /app

# Copy compiled JavaScript from the builder stage.
COPY --from=builder /app/.next /app/.next

# Copy prisma schema and migrations from the builder stage.
# COPY --from=builder /app/prisma /app/

# Install required dependencies, and if in dev mode, make the build directory writable.
COPY package*.json /app/
RUN if [ "$NODE_ENV" = "development" ]; \
  then npm ci; chmod g+w -R "/app/.next/"; \
  else npm ci --omit=dev; fi

# Expose Next.js web application port.
EXPOSE 3000

# Expose Node.js debug port.
EXPOSE 9229

# Switch to non-root user.
USER www-data

# Define health check.
HEALTHCHECK --interval=30s --timeout=7s --start-period=60s --retries=3 \
  CMD curl --fail http://localhost:3000/ || exit 1

# Start the app.
# CMD ["npm", "run", "start:migrate"]
CMD ["npm", "run", "start"]