import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import Typography from "@mui/material/Typography";
import PageHeader from "@components/PageHeader";
import { getMessages } from "@utils/i18n";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  return (
    <Layout maxWidth="sm">
      <PageHeader>{t("title")}</PageHeader>
      <Typography textAlign="center">{"Coming soon."}</Typography>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = await getMessages(locale);
  return {
    props: { messages },
  };
};
