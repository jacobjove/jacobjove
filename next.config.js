/**
 * @type {import('next').NextConfig}
 */

process.env.BASE_DIR = __dirname;

const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const plugins = [];

// TODO: remove this condition after pwa config bug is fixed:
// https://github.com/shadowwalker/next-pwa/issues/371
if (process.env.NODE_ENV !== "development") {
  plugins.push(
    withPWA({
      pwa: {
        disable: process.env.NODE_ENV === "development",
        dest: "public",
      },
    })
  );
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

if (process.env.NODE_ENV === "development") {
  // https://flaviocopes.com/nextjs-analyze-app-bundle/
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
  });
  plugins.push(withBundleAnalyzer);
}

const nextConfig = {
  // Delegate static file compression to Nginx in production.
  // https://nextjs.org/docs/api-reference/next.config.js/compression
  compress: process.env.NODE_ENV != "production",
  reactStrictMode: true,
  swcMinify: true,
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
};

module.exports = withPlugins(plugins, nextConfig);
