import Head from "next/head";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { getMessages } from "@utils/i18n";
import { getPostSlugs } from "@utils/blog";

export const siteTitle = "Jacob's portfolio";

interface HomePageProps {
  posts: string[];
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
            <Typography key={post}>{post}</Typography>
          ))}
        </Box>
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = await getMessages(locale, ["home"]);
  const posts = await getPostSlugs();
  return {
    props: {
      ...messages,
      posts,
    },
  };
};
