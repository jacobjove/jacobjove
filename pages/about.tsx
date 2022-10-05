import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import Typography from "@mui/material/Typography";
import PageHeader from "@components/PageHeader";
import { useTranslation } from "next-i18next";
import { getMessages } from "@utils/i18n";

export default function About() {
  const { t } = useTranslation("about");
  return (
    <Layout maxWidth="sm">
      <PageHeader>{t("title")}</PageHeader>
      <Typography textAlign="center">{"Coming soon."}</Typography>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getMessages(locale, ["about"])),
    },
  };
};
