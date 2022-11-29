import PostPreview from "@components/blog/PostPreview";
import PageHeader from "@components/PageHeader";
import { BlogPost } from "@interfaces/Post";
import Typography from "@mui/material/Typography";
import { getPublishedPosts } from "@utils/blog";
import { getMessages } from "@utils/i18n";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import Layout from "../components/Layout";

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const { t } = useTranslation("blog");
  return (
    <Layout>
      <PageHeader>{t("title")}</PageHeader>
      {posts.length ? (
        <div>
          {posts.map(({ publishedAt, title, slug }) => (
            <PostPreview key={slug} title={title} publishedAt={publishedAt} excerpt={""} slug={slug} />
          ))}
        </div>
      ) : (
        <Typography textAlign="center">{"Coming soon."}</Typography>
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async ({ locale }) => {
  const messages = await getMessages(locale, ["blog"]);
  const posts = await getPublishedPosts();
  return {
    props: {
      ...messages,
      posts,
    },
  };
};
