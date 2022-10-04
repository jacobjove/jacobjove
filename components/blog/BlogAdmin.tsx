import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { FC } from "react";
import { BlogPost } from "@interfaces/Post";

const columns: GridColDef<BlogPost>[] = [
  { field: "slug", headerName: "Slug", width: 90 },
  {
    field: "title",
    headerName: "Title",
    // width: 150,
    // TODO: https://mui.com/x/api/data-grid/data-grid/
    // editable: true,
    renderCell: ({ row, value }) => {
      return (
        <Link href={`/posts/${row.slug}`}>
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
      <DataGrid
        getRowId={(row) => row.slug}
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
