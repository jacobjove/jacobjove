import Layout from "../components/layout";
import Link from "next/link";
import { GetStaticProps } from "next";
import Typography from "@mui/material/Typography";

const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/jacobfredericksen/";

export default function CV() {
  return (
    <Layout>
      <Typography variant="h1">{"CV"}</Typography>
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
