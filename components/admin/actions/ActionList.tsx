import * as React from "react";
import { EditButton, List, ListProps, useListContext } from "react-admin";
import inflection from "inflection";
import { Grid, Card, CardMedia, CardContent, CardActions, Typography } from "@mui/material";

import { Action } from "@/graphql/schema";

const ActionGrid = (props: any) => {
  const { data, ids } = useListContext<Action>();
  return ids ? (
    <Grid container spacing={2}>
      {ids.map((id) => (
        <Grid key={id} xs={12} sm={6} md={4} lg={3} xl={2} item>
          <Card>
            <CardMedia image={`https://marmelab.com/posters/${data[id].name}-1.jpeg`} />
            <CardContent>
              <Typography variant="h5" component="h2" align="center">
                {inflection.humanize(data[id].name)}
              </Typography>
            </CardContent>
            <CardActions>
              <EditButton basePath="/actions" record={data[id]} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  ) : null;
};

const ActionList = (props: ListProps) => (
  <List
    {...props}
    sort={{ field: "name", order: "ASC" }}
    perPage={20}
    pagination={false}
    component="div"
    actions={false}
  >
    <ActionGrid />
  </List>
);

export default ActionList;
