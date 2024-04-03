import { unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata, GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import PostPage from './post';
import { getStaticParams } from '@i18n';
import Layout from '@app/client/layout';

import { getAllPostSlugs, getPostBySlug } from '@utils/blog';

export const metadata: Metadata = {
  title: 'Post',
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const slug = params?.slug as string;
  const { content, ...metadata } = await getPostBySlug(slug);
  const source = await serialize(content);
  return {
    props: {
      source,
      metadata,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllPostSlugs();
  const paths = slugs.map((slug) => `/posts/${slug}`);
  return {
    paths,
    fallback: false,
  };
};

export default async function Page({ params }: { params: { locale: string; slug: string } }) {
  unstable_setRequestLocale(params.locale);
  const slug = params?.slug as string;
  const { content, ...metadata } = await getPostBySlug(slug);
  const source = await serialize(content);
  return (
    <Layout maxWidth="sm">
      <PostPage metadata={metadata} source={source} />
    </Layout>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
