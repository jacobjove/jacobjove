// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx");
const nextPWA = require("next-pwa");
const { withSentryConfig } = require("@sentry/nextjs");

process.env.BASE_DIR = __dirname;

const REQUIRED_ENV_VARS = ["NEXT_PUBLIC_BASE_URL", "NEXT_PUBLIC_DOMAIN"];
for (const envVar of REQUIRED_ENV_VARS) {
  if (!process.env[envVar]) {
    throw new Error(`Environment variable ${envVar} is required.`);
  }
}

// https://github.com/shadowwalker/next-pwa
const withPWA = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const sentryWebpackPluginOptions = {
  // https://github.com/getsentry/sentry-webpack-plugin#options
  silent: true,
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    // https://nextjs.org/docs/advanced-features/compiler#emotion
    emotion: true,
    // https://nextjs.org/docs/advanced-features/compiler#remove-console
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },
  // Delegate static file compression to Nginx in production.
  // https://nextjs.org/docs/api-reference/next.config.js/compression
  compress: process.env.NODE_ENV != "production", // TODO
  experimental: {
    esmExternals: false,
    modularizeImports: {
      lodash: {
        transform: "lodash/{{member}}",
      },
    },
    // For tracing, include files from the monorepo base (two directories up).
    // https://nextjs.org/docs/advanced-features/output-file-tracing#caveats
    // outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_DOMAIN],
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  output: "standalone",
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/app",
        destination: "/app/home",
        permanent: true,
      },
    ];
  },
  sentry: {
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
    hideSourceMaps: true,
  },
  swcMinify: true,
  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (config, { webpack }) => {
    // For production builds, tree-shake all code in the Sentry SDK related to debug logging,
    // since the debug code is only useful in development environments.
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/tree-shaking/#tree-shaking-optional-code
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: process.env.NODE_ENV === "development",
      })
    );
    // Add necessary aliases/fallbacks.
    const defaultResolve = config.resolve ?? {};
    config.resolve = {
      ...defaultResolve,
      fallback: {
        ...(defaultResolve.fallback ?? {}),
        // https://github.com/react-dnd/react-dnd/issues/3423
        // https://github.com/react-dnd/react-dnd/issues/3423#issuecomment-1092621793
        "react/jsx-runtime": "react/jsx-runtime.js",
        "react-swipeable-views": "react-swipeable-views-react-18-fix",
        // 'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
      },
    };
    return config;
  },
};

module.exports = withSentryConfig(withNx(withPWA(nextConfig)), sentryWebpackPluginOptions);
