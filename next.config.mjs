/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // Delegate static file compression to Nginx in production.
  // https://nextjs.org/docs/api-reference/next.config.js/compression
  compress: process.env.NODE_ENV != "production",
  future: {
    webpack5: true,
  },
  swcMinify: true,
  webpack: (config) => {
    // config.experiments = { topLevelAwait: true, layers: true };
    return config;
  },
}

export default nextConfig
