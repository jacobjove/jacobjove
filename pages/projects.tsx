import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { GetStaticProps } from "next";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <p>{"Here are a few apps I've built:"}</p>
        <ul>
          <li>
            <Link href={`https://selfbuilder.orega.org/`}>
              <a>{"SelfBuilder"}</a>
            </Link>
          </li>
          <li>
            <Link href={`https://modularhistory.orega.org/`}>
              <a>{"ModularHistory"}</a>
            </Link>
          </li>
          <li>
            <Link href={`https://www.kwstriping.com/`}>
              <a>{"KW Striping"}</a>
            </Link>
          </li>
        </ul>
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
