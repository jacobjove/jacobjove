import Layout from "@components/Layout";
import BlogAdmin from "@components/admin/BlogAdmin";
import PageHeader from "@components/PageHeader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

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
