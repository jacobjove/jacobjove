// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx");
const withPWA = require("next-pwa");
// const path = require("path");

const REQUIRED_ENV_VARS = ["NEXT_PUBLIC_DOMAIN"];

process.env.BASE_DIR = __dirname;

for (const envVar of REQUIRED_ENV_VARS) {
  if (!process.env[envVar]) {
    throw new Error(`Environment variable ${envVar} is required.`);
  }
}

const plugins = [
  // TODO
  // https://github.com/shadowwalker/next-pwa/issues/371
  withPWA({
    pwa: {
      disable: process.env.NODE_ENV === "development",
      dest: "public",
    },
  }),
];

if (process.env.NODE_ENV !== "development") {
  // https://flaviocopes.com/nextjs-analyze-app-bundle/
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
  });
  plugins.push(withBundleAnalyzer);
}

const modulesToTranspile = [
  // 'react-datasheet-grid'
  "date-fns",
];

if (modulesToTranspile.length) {
  // https://github.com/martpie/next-transpile-modules
  const withTM = require("next-transpile-modules")(modulesToTranspile);
  plugins.push(withTM);
}

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
            exclude: ["error"],
          }
        : false,
  },
  // Delegate static file compression to Nginx in production.
  // https://nextjs.org/docs/api-reference/next.config.js/compression
  compress: process.env.NODE_ENV != "production", // TODO
  experimental: {
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
  swcMinify: true,
  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (config) => {
    const defaultResolve = config.resolve ?? {};
    return {
      ...config,
      resolve: {
        ...defaultResolve,
        fallback: {
          ...(defaultResolve.fallback ?? {}),
          // https://github.com/react-dnd/react-dnd/issues/3423
          // https://github.com/react-dnd/react-dnd/issues/3423#issuecomment-1092621793
          "react/jsx-runtime": "react/jsx-runtime.js",
          "react-swipeable-views": "react-swipeable-views-react-18-fix",
          // 'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
        },
      },
    };
  },
};

module.exports = async () => {
  return withNx({
    nx: {
      // Set this to true if you would like to to use SVGR
      // See: https://github.com/gregberge/svgr
      svgr: false,
    },
    ...plugins.reduce((acc, plugin) => {
      return plugin(acc), { ...nextConfig };
    }),
  });
};
