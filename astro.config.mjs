// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import sentry from '@sentry/astro';

const SENTRY_ENVIRONMENT =
  process.env.SENTRY_ENVIRONMENT ||
  process.env.ENVIRONMENT ||
  process.env.NODE_ENV;

// https://astro.build/config
export default defineConfig({
  adapter: node({ mode: 'standalone' }),
  integrations: [sentry({
    dsn: process.env.SENTRY_DSN,
    environment: SENTRY_ENVIRONMENT,
    sourceMapsUploadOptions: {
      project: 'jacobjove',
      authToken: process.env.SENTRY_AUTH_TOKEN,
    },
  })],
});