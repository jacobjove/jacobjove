/**
 * @type {import('next').NextConfig}
 */

process.env.BASE_DIR = __dirname;

const withPWA = require("next-pwa");

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

const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development" && process.env.DEBUG !== "true",
  },
  // Delegate static file compression to Nginx in production.
  // https://nextjs.org/docs/api-reference/next.config.js/compression
  compress: process.env.NODE_ENV != "production",
  images: {
    domains: [process.env.DOMAIN],
  },
  reactStrictMode: true,
  async redirects() {
    const redirects = [
      {
        source: "/app",
        destination: "/app/home",
        permanent: true,
      },
    ];
    return redirects;
  },
  swcMinify: true,
};

module.exports = async () => {
  return plugins.reduce((acc, plugin) => {
    return plugin(acc), { ...nextConfig };
  });
};
