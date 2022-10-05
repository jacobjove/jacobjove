import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import PageHeader from "@components/PageHeader";
import { getMessages } from "@utils/i18n";
import { BlogPost } from "@interfaces/Post";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { getPosts } from "@utils/blog";
import PostPreview from "@components/blog/PostPreview";

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
            <PostPreview
              key={slug}
              title={title}
              publishedAt={publishedAt}
              excerpt={""}
              slug={slug}
            />
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
  const posts = await getPosts();
  return {
    props: {
      ...messages,
      posts,
    },
  };
};
