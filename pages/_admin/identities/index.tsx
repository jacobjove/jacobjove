import ActionAdmin from "@/components/admin/actions/ActionAdmin";
import Layout from "@/components/Layout";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const AdminLandingPage: NextPage = () => {
  return (
    <Layout>
      <NextSeo title={"HabitBuilder"} canonical={"/"} description={"Be your best self."} />
      <ActionAdmin />
    </Layout>
  );
};
export default AdminLandingPage;
