import Layout from "@components/Layout";
import BlogAdmin from "@components/admin/BlogAdmin";
import PageHeader from "@components/PageHeader";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { getMessages } from "@utils/i18n";

const AdminPage = () => {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin?callbackUrl=/admin");
    },
  });
  if (!session) return null;
  return (
    <Layout>
      <PageHeader>{"Admin"}</PageHeader>
      <BlogAdmin />
    </Layout>
  );
};

export default AdminPage;

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      messages: await getMessages(locale),
    },
  };
};
