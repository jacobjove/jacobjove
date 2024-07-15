import type { Metadata } from 'next';
import BlogPage from './blog';
import Layout from '@app/client/layout';
import { getPublishedPosts } from '@app/utils/blog';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Page() {
  const posts = await getPublishedPosts();
  return (
    <Layout>
      {/* TODO: - Recent Blog Post Titles with Thumbnails
      - "Read More" Button or Link to Blog Page */}
      <BlogPage posts={posts} />
    </Layout>
  );
}
