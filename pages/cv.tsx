import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { GetStaticProps } from "next";

const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/jacobfredericksen/";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <p>{"I'll add a copy of my resume here soon."}</p>
        <p>{"In the meantime, take a look at my LinkedIn profile:"}</p>
        <p>
          <Link href={LINKEDIN_PROFILE_URL}>
            <a>{LINKEDIN_PROFILE_URL}</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
