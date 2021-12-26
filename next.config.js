/**
 * @type {import('next').NextConfig}
 */

process.env.BASE_DIR = __dirname;

const withPlugins = require("next-compose-plugins");

const plugins = [];

const modulesToTranspile = [
  // 'react-datasheet-grid'
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
  swcMinify: true,
  webpack: (config) => {
    return config;
  },
};

module.exports = withPlugins(plugins, nextConfig);
