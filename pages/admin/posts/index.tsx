import BlogAdmin from "@components/blog/BlogAdmin";
import { BlogPost } from "@interfaces/Post";
import { GetServerSideProps } from "next";
import { getMessages } from "@utils/i18n";
import AdminLayout from "@components/admin/AdminLayout";
import { getDb, serialize } from "@utils/mongo";

const BlogAdminPage = ({ data }: { data: BlogPost[] }) => {
  return (
    <AdminLayout>
      <BlogAdmin rows={data} />
    </AdminLayout>
  );
};

export default BlogAdminPage;

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const db = await getDb();
  const posts = await db.collection("posts").find().toArray();
  return {
    props: {
      messages: await getMessages(locale),
      data: serialize(posts),
    },
  };
};
