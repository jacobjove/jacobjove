import { GetServerSideProps } from "next";
import { getMessages } from "@utils/i18n";
import AdminLayout from "@components/admin/AdminLayout";
import { getDb } from "@utils/mongo";
import BlogPostForm from "@components/admin/blog/BlogPostForm";

const BlogPostPage = () => {
  return (
    <AdminLayout>
      <BlogPostForm />
    </AdminLayout>
  );
};

export default BlogPostPage;

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const db = await getDb();
  return {
    props: {
      messages: await getMessages(locale),
      data: await db.collection("posts").find().toArray(),
    },
  };
};
