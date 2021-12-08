/**
 * @type {import('next').NextConfig}
 */

process.env.BASE_DIR = __dirname;

const nextConfig = {
  // Delegate static file compression to Nginx in production.
  // https://nextjs.org/docs/api-reference/next.config.js/compression
  compress: process.env.NODE_ENV != "production",
  swcMinify: true,
  webpack: (config) => {
    return config;
  },
}

module.exports = nextConfig
