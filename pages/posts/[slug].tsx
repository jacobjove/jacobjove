import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getMessages } from "@utils/i18n";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "@components/Layout";
import PageHeader from "@components/PageHeader";
import { BlogPost } from "@interfaces/Post";
import { getAllPostSlugs, getPostBySlug } from "@utils/blog";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface BlogPostPageProps {
  metadata: BlogPost;
  source: MDXRemoteSerializeResult;
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ metadata, source }) => {
  const router = useRouter();
  if (!router.isFallback && !metadata?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout maxWidth="sm">
      <article>
        <PageHeader>{metadata.title}</PageHeader>
        <MDXRemote {...source} lazy />
      </article>
    </Layout>
  );
};

export default BlogPostPage;

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const slug = params?.slug as string;
  console.log(">>> slug", slug);
  const { content, ...metadata } = await getPostBySlug(slug);
  const source = await serialize(content);
  return {
    props: {
      ...(await getMessages(locale)),
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
