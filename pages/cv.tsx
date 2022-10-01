import Layout from "../components/Layout";
import Link from "next/link";
import { GetStaticProps } from "next";
import Typography from "@mui/material/Typography";
import PageHeader from "@components/PageHeader";

const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/jacobfredericksen/";

export default function CV() {
  return (
    <Layout>
      <PageHeader>{"CV"}</PageHeader>
      <div>
        <Typography>{"I'll add a copy of my resume here soon."}</Typography>
        <Typography>{"In the meantime, take a look at my LinkedIn profile:"}</Typography>
        <Typography>
          <Link href={LINKEDIN_PROFILE_URL}>
            <a>{LINKEDIN_PROFILE_URL}</a>
          </Link>
        </Typography>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
