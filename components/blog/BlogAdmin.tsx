import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import { BlogPost } from "@interfaces/Post";

const columns: GridColDef<BlogPost>[] = [
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    // width: 150,
    // TODO: https://mui.com/x/api/data-grid/data-grid/
    // editable: true,
    renderCell: ({ row, value }) => {
      return (
        <Link href={`/admin/posts/${row._id}`}>
          <a>{value}</a>
        </Link>
      );
    },
  },
  {
    field: "slug",
    headerName: "Slug",
  },
  {
    field: "body",
    headerName: "Body",
    sortable: false,
  },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 110,
  //   editable: true,
  // },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

interface BlogAdminProps {
  rows: BlogPost[];
}

const BlogAdmin: FC<BlogAdminProps> = ({ rows }: BlogAdminProps) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box display="flex" justifyContent="flex-end" my={1}>
        <Link href="/admin/posts/new" passHref>
          <Button component={"a"}>
            <AddIcon /> Add
          </Button>
        </Link>
      </Box>
      <DataGrid
        getRowId={(row) => row._id}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default BlogAdmin;
