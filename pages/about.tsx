import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import Typography from "@mui/material/Typography";
import PageHeader from "@components/PageHeader";

export default function About() {
  return (
    <Layout maxWidth="sm">
      <PageHeader>{"About"}</PageHeader>
      <Typography>{"I'm broken... But I'll fix this soon."}</Typography>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`../messages/${locale}.json`)).default;
  return {
    props: { messages },
  };
};
