'use client';

import Typography from '@mui/material/Typography';
import * as m from '@paraglide/messages';
import PostPreview from './PostPreview';
import PageHeader from '@app/components/PageHeader';

export interface BlogPost {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  publishedAt: string;
  updatedAt?: string;
  published: boolean;
}

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <>
      <PageHeader>{m.blog_title()}</PageHeader>
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
