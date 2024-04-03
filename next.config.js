import path from 'path';
import url from 'url';
import mdx from '@next/mdx';
import { withSentryConfig } from '@sentry/nextjs';
import createNextIntlPlugin from 'next-intl/plugin';

// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const _filename = url.fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const ROOT_DIR = path.resolve(_dirname);

const withNextIntl = createNextIntlPlugin('./i18n/index.ts');

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
const nextConfig = {
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
  // https://nextjs.org/docs/api-reference/next.config.js/disabling-x-powered-by
  poweredByHeader: false,
  sentry: {
    // https://webpack.js.org/configuration/devtool/
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
    hideSourceMaps: true,
  },
  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,
  swcMinify: true,
  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (config, { webpack }) => {
    // For production builds, tree-shake all code in the Sentry SDK related to debug logging.
    // The debug code is only useful in development environments.
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/tree-shaking/#tree-shaking-optional-code
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: process.env.NODE_ENV === 'development',
      })
    );
    return config;
  },
};

// Set additional config options for the Sentry Webpack plugin.
// https://github.com/getsentry/sentry-webpack-plugin#options
const sentryWebpackPluginOptions = {
  dryRun: process.env.SENTRY_DRY_RUN === 'true',
  silent: true,
};

export default withSentryConfig(withNextIntl(withMDX(nextConfig), sentryWebpackPluginOptions));
