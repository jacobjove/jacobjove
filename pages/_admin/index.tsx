import Layout from "@/components/Layout";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";

const ADMIN_PAGES = [
  ["/_admin/users", "Users"],
  ["/_admin/actions", "Actions"],
  ["/_admin/identities", "Identities"],
];

const AdminLandingPage: NextPage = () => {
  return (
    <Layout>
      <NextSeo title={"SelfBuilder"} canonical={"/"} description={"Be your best self."} />
      <ul>
        {ADMIN_PAGES.map(([path, label]) => (
          <li key={path}>
            <Link href={path}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
export default AdminLandingPage;
