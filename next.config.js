import path from 'path';
import { fileURLToPath } from 'url';
import mdx from '@next/mdx';
import { withSentryConfig } from '@sentry/nextjs';
// eslint-disable-next-line import/no-unresolved
import { paraglide } from '@inlang/paraglide-next/plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const workspaceRoot = path.resolve(__dirname);
const paraglideDir = path.resolve(workspaceRoot, `paraglide`);
const messagesDir = path.resolve(workspaceRoot, `messages`);

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: '@mdx-js/react',
  },
});

const NGINX_COMPRESSION_ENABLED = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = paraglide({
  compress: !NGINX_COMPRESSION_ENABLED,
  // images: {
  //   remotePatterns: ['jacobjove.org'],
  // },
  // https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files
  output: 'standalone',
  // https://nextjs.org/docs/advanced-features/using-mdx
  pageExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'md',
    'mdx',
  ],
  paraglide: {
    project: path.resolve(messagesDir, `${process.env.APP}.inlang`),
    outdir: paraglideDir,
  },
  // https://nextjs.org/docs/api-reference/next.config.js/disabling-x-powered-by
  poweredByHeader: false,
  sentry: {
    // https://webpack.js.org/configuration/devtool/
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
    hideSourceMaps: true,
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#disable-sentrywebpackplugin
    disableServerWebpackPlugin: true, // process.env.NODE_ENV === 'development',
    disableClientWebpackPlugin: true, // process.env.NODE_ENV === 'development',
  },
  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,
  swcMinify: true,
});

// Set additional config options for the Sentry Webpack plugin.
// https://github.com/getsentry/sentry-webpack-plugin#options
const sentryWebpackPluginOptions = {
  dryRun: true, // TODO
  silent: true,
  org: 'jacobjove',
  project: 'jacobjove',
  url: 'https://glitchtip.orega.org/',
};

const sentryOptions = {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Transpile SDK to be compatible with IE11 (increases bundle size)
  transpileClientSDK: true,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors.
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: false,
};

export default withSentryConfig(withMDX(nextConfig), sentryWebpackPluginOptions, sentryOptions);
