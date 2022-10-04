import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import PageHeader from "@components/PageHeader";
import { getMessages } from "@utils/i18n";
import { BlogPost } from "@interfaces/Post";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { getBlogPostSlugs, getPostBySlug } from "@utils/blog";
import PostPreview from "@components/blog/PostPreview";

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const t = useTranslations("Blog");
  return (
    <Layout>
      <PageHeader>{t("title")}</PageHeader>
      {posts.length ? (
        <div>
          {posts.map(({ createdAt, title, slug }) => (
            <PostPreview key={slug} title={title} createdAt={createdAt} excerpt={""} slug={slug} />
          ))}
        </div>
      ) : (
        <Typography textAlign="center">{"Coming soon."}</Typography>
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async ({ locale }) => {
  const messages = await getMessages(locale);
  const slugs = await getBlogPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return {
    props: {
      messages,
      posts,
    },
  };
};
