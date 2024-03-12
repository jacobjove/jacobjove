import PageHeader from "@components/PageHeader";
import Typography from "@mui/material/Typography";
import { getMessages } from "@utils/i18n";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import Layout from "../components/Layout";

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
