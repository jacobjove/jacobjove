import PostPreview from "@components/blog/PostPreview";
import { BlogPost } from "@interfaces/Post";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getPublishedPosts } from "@utils/blog";
import { getMessages } from "@utils/i18n";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export const siteTitle = "Jacob's blog";

interface HomePageProps {
  posts: BlogPost[];
}

export default function Home({ posts }: HomePageProps) {
  const { t } = useTranslation("home");
  const name = t("name");
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box
        sx={{
          height: "95%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
        <Typography variant={"h1"}>{name}</Typography>
        <Box mt={2}>
          <Typography>{t("greeting")}</Typography>
        </Box>
        <Box>
          {posts.map((post) => (
            <PostPreview key={post.slug} {...post} />
          ))}
        </Box>
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = await getMessages(locale, ["home"]);
  const posts = await getPublishedPosts();
  return {
    props: {
      ...messages,
      posts,
    },
  };
};
