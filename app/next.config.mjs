/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // Delegate static file compression to Nginx in production.
  // https://nextjs.org/docs/api-reference/next.config.js/compression
  compress: process.env.ENVIRONMENT != "prod",
}

export default nextConfig
