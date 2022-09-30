import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { GetStaticProps } from "next";
import Date from "../components/date";
import Typography from "@mui/material/Typography";

interface Post {
  id: string;
  date: string;
  title: string;
}

interface BlogProps {
  allPostsData: Post[];
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const allPostsData: Post[] = [];
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Blog({ allPostsData }: BlogProps) {
  return (
    <Layout>
      <Typography variant="h1">{"Blog"}</Typography>
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
