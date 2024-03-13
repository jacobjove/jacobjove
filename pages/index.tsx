import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getMessages } from "@utils/i18n";
import { GetStaticProps } from "next";
import { Trans, useTranslation } from "next-i18next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export const siteTitle = "Jacob's portfolio";

const BLOG_URL = "https://jacobjove.org/blog/";
const LINK_BLOG = false;

export default function Home() {
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
          // className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
        <Typography variant={"h1"}>{name}</Typography>
        <Box mt={2}>
          <Typography>{t("greeting")}</Typography>
        </Box>
        {LINK_BLOG && (
          <Box>
            <Trans t={t} i18nKey="blogIntro" components={{ blogLink: <a href={BLOG_URL} /> }} />
          </Box>
        )}
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = await getMessages(locale, ["home"]);
  return {
    props: {
      ...messages,
    },
  };
};
