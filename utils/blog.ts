import { readFileSync } from 'fs';
import { join } from 'path';
import { globSync } from 'glob';
import matter from 'gray-matter';
import type { BlogPost } from '@app/blog/blog';

const POSTS_DIR = `${process.cwd()}/posts`;
const POSTS_GLOB_PATTERN = `${POSTS_DIR}/**/*.mdx`;

export const getAllPostSlugs = async () => {
  return globSync(POSTS_GLOB_PATTERN).map((filename) => {
    return filename
      .split('/')
      .slice(-1)[0]
      .replace(/ /g, '-')
      .replace(/\.mdx?$/, '')
      .trim();
  });
};

export const slugToPath = (slug: string): string => join(POSTS_DIR, `${slug}.mdx`);

export const getPublishedPosts = async (): Promise<BlogPost[]> => {
  const slugs = await getAllPostSlugs();
  return Promise.all(slugs.map((slug) => getPostBySlug(slug))).then((posts) =>
    posts.filter((post) => post.publishedAt)
  );
};

export const getPostBySlug = async (slug: string): Promise<BlogPost> => {
  const modulePath = slugToPath(slug);
  const fileContents = readFileSync(modulePath, 'utf8');
  return parseMarkdown(fileContents);
};

export const parseMarkdown = (fileContents: string): BlogPost => {
  const { data, content } = matter(fileContents);
  const parsedData = data as Omit<BlogPost, 'content'>;
  return {
    ...parsedData,
    content,
  };
};
