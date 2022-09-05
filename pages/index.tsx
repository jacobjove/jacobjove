import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
// import Date from '../components/date'
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{"Hi, I'm Jacob."}</p>
        <p>{"This is my portfolio."}</p>
        <p>{"Here are a couple apps I've built:"}</p>
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
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
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
