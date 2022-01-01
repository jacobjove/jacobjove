import ActionAdmin from "@/components/admin/actions/ActionAdmin";
import Layout from "@/components/Layout";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const AdminLandingPage: NextPage = () => {
  return (
    <Layout>
      <NextSeo title={"SelfBuilder"} canonical={"/"} description={"Be your best self."} />
      <ActionAdmin />
    </Layout>
  );
};
export default AdminLandingPage;
