'use client';

import type { NextPage } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';
import ErrorPage from 'next/error';
import { useRouter } from 'next/navigation';
import type { BlogPost } from '@app/blog';
import PageHeader from '@components/PageHeader';

interface BlogPostPageProps {
  metadata: Omit<BlogPost, 'content'>;
  source: MDXRemoteSerializeResult;
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ metadata, source }) => {
  const router = useRouter();
  if (!router.isFallback && !metadata?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <article>
        <PageHeader>{metadata.title}</PageHeader>
        <MDXRemote {...source} lazy />
      </article>
    </>
  );
};

export default BlogPostPage;
