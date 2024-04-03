import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from '@navigation';
import AdminLayout from '@components/admin/AdminLayout';

const AdminPage = () => {
  return (
    <AdminLayout>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link href="/admin/posts" passHref>
          <Button>{'Blog'}</Button>
        </Link>
      </Box>
    </AdminLayout>
  );
};

export default AdminPage;
