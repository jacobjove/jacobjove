import { init } from "@sentry/nextjs";

type Config = Parameters<typeof init>[0];

export const generateSentryConfig = (): Config => {
  const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
  const SENTRY_ENVIRONMENT =
    process.env.SENTRY_ENVIRONMENT ||
    process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT ||
    process.env.NODE_ENV;

  return {
    autoSessionTracking: false,
    debug: process.env.SENTRY_DEBUG
      ? process.env.SENTRY_DEBUG === "true"
      : process.env.NODE_ENV === "development",
    dsn: SENTRY_DSN,
    enabled: process.env.NODE_ENV === "production",
    environment: SENTRY_ENVIRONMENT,
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/filtering/#decluttering-sentry
    ignoreErrors: [
      // Random plugins/extensions
      "top.GLOBALS",
      "atomicFindClose",
      // Facebook borked
      "fb_xd_fragment",
    ],
    tracesSampleRate: process.env.NODE_ENV === "production" ? 0.2 : 1.0,
  };
};
