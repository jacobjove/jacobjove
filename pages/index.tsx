import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { GetStaticProps } from "next";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Typography>{"Hi, I'm Jacob."}</Typography>
        <Typography>{"This is my portfolio."}</Typography>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
