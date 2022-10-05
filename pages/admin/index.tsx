import { GetServerSideProps } from "next";
import { getMessages } from "@utils/i18n";
import Link from "next/link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AdminLayout from "@components/admin/AdminLayout";

const AdminPage = () => {
  return (
    <AdminLayout>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link href="/admin/posts" passHref>
          <Button component={"a"}>{"Blog"}</Button>
        </Link>
      </Box>
    </AdminLayout>
  );
};

export default AdminPage;

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await getMessages(locale)),
    },
  };
};
