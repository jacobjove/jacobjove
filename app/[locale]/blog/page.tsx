import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import BlogPage from './blog';
import Layout from '@app/client/layout';
import { getPublishedPosts } from '@utils/blog';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const posts = await getPublishedPosts();
  return (
    <Layout>
      {/* TODO: - Recent Blog Post Titles with Thumbnails
      - "Read More" Button or Link to Blog Page */}
      <BlogPage posts={posts} />
    </Layout>
  );
}
