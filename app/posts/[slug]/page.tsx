import type { Metadata } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import PostPage from './post';
import Layout from '@app/client/layout';

import { getPostBySlug } from '@app/utils/blog';

export const metadata: Metadata = {
  title: 'Post',
};

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params?.slug as string;
  const { content, ...metadata } = await getPostBySlug(slug);
  const source = await serialize(content);
  return (
    <Layout maxWidth="sm">
      <PostPage metadata={metadata} source={source} />
    </Layout>
  );
}

// export async function generateStaticParams() {
//   const slugs = await getAllPostSlugs();
//   return slugs.map((slug) => ({
//     // locale,
//     slug,
//   }));
// }
