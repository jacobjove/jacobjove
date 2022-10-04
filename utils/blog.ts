import glob from "glob";
import { BlogPost } from "@interfaces/Post";
import matter from "gray-matter";
import { join } from "path";
import { readFileSync } from "fs";

const POSTS_DIR = `${process.cwd()}/_posts`;
const MD_EXTENSION_LENGTH = ".md".length;

export const getBlogPostSlugs = async () => {
  return glob
    .sync(`${POSTS_DIR}/**/*.md`)
    .map((filename) =>
      filename.split("/").slice(-1)[0].replace(/ /g, "-").slice(0, -MD_EXTENSION_LENGTH).trim()
    );
};

export const slugToPath = (slug: string): string => join(POSTS_DIR, `${slug}.md`);

export const getPostBySlug = async (slug: string): Promise<BlogPost> => {
  console.log("Getting post by slug", slug);
  const modulePath = slugToPath(slug);
  const fileContents = readFileSync(modulePath, "utf8");
  return convertMarkdown(fileContents);
};

export const convertMarkdown = (fileContents: string): BlogPost => {
  console.log(fileContents);
  const { data, content } = matter(fileContents);
  const parsedData = data as Omit<BlogPost, "content">;
  return {
    ...parsedData,
    content,
  };
};
