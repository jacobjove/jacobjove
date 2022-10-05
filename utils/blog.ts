import glob from "glob";
import { BlogPost } from "@interfaces/Post";
import matter from "gray-matter";
import { join } from "path";
import { readFileSync } from "fs";

const POSTS_DIR = `${process.cwd()}/posts`;
const POSTS_GLOB_PATTERN = `${POSTS_DIR}/**/*.mdx`;

export const getPostSlugs = async () => {
  return glob.sync(POSTS_GLOB_PATTERN).map((filename) => {
    return filename
      .split("/")
      .slice(-1)[0]
      .replace(/ /g, "-")
      .replace(/\.mdx?$/, "")
      .trim();
  });
};

export const slugToPath = (slug: string): string => join(POSTS_DIR, `${slug}.mdx`);

export const getPosts = async (): Promise<BlogPost[]> => {
  const slugs = await getPostSlugs();
  return Promise.all(slugs.map((slug) => getPostBySlug(slug)));
};

export const getPostBySlug = async (slug: string): Promise<BlogPost> => {
  const modulePath = slugToPath(slug);
  const fileContents = readFileSync(modulePath, "utf8");
  return convertMarkdown(fileContents);
};

export const convertMarkdown = (fileContents: string): BlogPost => {
  const { data, content } = matter(fileContents);
  const parsedData = data as Omit<BlogPost, "content">;
  return {
    ...parsedData,
    content,
  };
};
