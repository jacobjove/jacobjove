import AdminLayout from "@components/admin/AdminLayout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getMessages } from "@utils/i18n";
import { GetServerSideProps } from "next";
import Link from "next/link";

const AdminPage = () => {
  return (
    <AdminLayout>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link href="/admin/posts" passHref>
          <Button>{"Blog"}</Button>
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
