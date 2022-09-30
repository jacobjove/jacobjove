import Layout from "../components/layout";
import { GetStaticProps } from "next";
import { Typography } from "@mui/material";

export default function About() {
  return (
    <Layout>
      <Typography variant="h1">{"About"}</Typography>
      <Typography>{"I'm broken... But I'll fix this soon."}</Typography>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
