import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { GetStaticProps } from "next";
import Date from "../components/date";
import PageHeader from "@components/PageHeader";
import { getMessages } from "@utils/i18n";

interface Post {
  id: string;
  date: string;
  title: string;
}

interface BlogProps {
  allPostsData: Post[];
}

export default function Blog({ allPostsData }: BlogProps) {
  return (
    <Layout>
      <PageHeader>{"Blog"}</PageHeader>
      <div>
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
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async ({ locale }) => {
  const messages = await getMessages(locale);
  const allPostsData: Post[] = [];
  return {
    props: {
      messages,
      allPostsData,
    },
  };
};
