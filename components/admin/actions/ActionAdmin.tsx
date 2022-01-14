import { gql, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import React, { FC } from "react";

const QUERY = gql`
  query Actions {
    acts {
      id
      name
      description
    }
  }
`;

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    width: 150,
    editable: true,
  },
];

const ActionAdmin: FC = () => {
  const { data, loading, error } = useQuery(QUERY);
  if (loading) {
    return <Typography textAlign="center">Loading...</Typography>;
  }
  if (error) {
    console.error(error);
    return null;
  }
  return (
    <Box display="flex" height="100%" mx={2}>
      <Box flexGrow={1}>
        <DataGrid
          rows={data.acts}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default ActionAdmin;
