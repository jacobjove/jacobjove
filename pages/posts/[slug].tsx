import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getMessages } from "@utils/i18n";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "@components/Layout";
import PageHeader from "@components/PageHeader";
import { BlogPost } from "@interfaces/Post";
import { getBlogPostSlugs, getPostBySlug } from "@utils/blog";

const BlogPostPage: NextPage<{ data: BlogPost }> = ({ data }) => {
  console.log(">>>>>Rendering post page......");
  const router = useRouter();
  if (!router.isFallback && !data?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout maxWidth="sm">
      <article>
        <PageHeader>{data.title}</PageHeader>
        <div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const slug = params?.slug as string;
  const data = await getPostBySlug(slug);
  console.log(data);
  return {
    props: {
      messages: await getMessages(locale),
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getBlogPostSlugs();
  const paths = slugs.map((slug) => `/posts/${slug}`);
  return {
    paths,
    fallback: false,
  };
};
