import { GetServerSideProps, NextPage } from "next";
import { getMessages } from "@utils/i18n";
import AdminLayout from "@components/admin/AdminLayout";
import { getDb, serialize } from "@utils/mongo";
import BlogPostForm from "@components/admin/blog/BlogPostForm";
import { ObjectId } from "mongodb";
import { BlogPost } from "@components/admin/blog/BlogAdmin";

interface EditBlogPostPageProps {
  data: BlogPost;
}

const BlogPostPage: NextPage<EditBlogPostPageProps> = ({ data }) => {
  return (
    <AdminLayout>
      <BlogPostForm data={data} />
    </AdminLayout>
  );
};

export default BlogPostPage;

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => {
  const db = await getDb();
  const id = params?.id as string;
  const post = await db.collection("posts").findOne({ _id: new ObjectId(id) });
  if (!post) return { notFound: true };
  return {
    props: {
      messages: await getMessages(locale),
      data: serialize(post),
    },
  };
};
