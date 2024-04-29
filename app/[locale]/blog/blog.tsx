'use client';

import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import PostPreview from '@components/blog/PostPreview';
import PageHeader from '@components/PageHeader';
import type { BlogPost } from '@types/blog';

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const t = useTranslations('blog');
  return (
    <>
      <PageHeader>{t('title')}</PageHeader>
      {posts.length ? (
        <div>
          {posts.map(({ publishedAt, title, slug }) => (
            <PostPreview
              key={slug}
              title={title}
              publishedAt={publishedAt}
              excerpt={''}
              slug={slug}
            />
          ))}
        </div>
      ) : (
        <Typography textAlign="center">{'Coming soon.'}</Typography>
      )}
    </>
  );
}
