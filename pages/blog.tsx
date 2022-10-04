import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { GetStaticProps } from "next";
import Date from "../components/date";
import PageHeader from "@components/PageHeader";
import { getMessages } from "@utils/i18n";
import { BlogPost } from "@components/admin/blog/BlogAdmin";
import { getDb, serialize } from "@utils/mongo";

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <Layout>
      <PageHeader>{"Blog"}</PageHeader>
      <div>
        <ul className={utilStyles.list}>
          {posts.map(({ _id, createdAt, title }) => (
            <li className={utilStyles.listItem} key={_id}>
              <Link href={`/posts/${_id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {createdAt && (
                <small className={utilStyles.lightText}>
                  <Date dateString={createdAt} />
                </small>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async ({ locale }) => {
  const messages = await getMessages(locale);
  const db = await getDb();
  const posts = (await db.collection("posts").find().toArray().then(serialize)) as BlogPost[];
  return {
    props: {
      messages,
      posts,
    },
  };
};
