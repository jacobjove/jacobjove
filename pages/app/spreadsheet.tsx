import Layout from "@/components/Layout";
import { Action, ActionSchedule, Schedule, UserActionSchedule } from "@/graphql/schema";
import client from "@/lib/apollo/client/apollo";
import { gql } from "@apollo/client";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { addDays, format, parseISO, subDays } from "date-fns";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useState } from "react";

interface SpreadsheetPageProps {
  session: Session;
  columns: string[];
  data: (Record<string, boolean> & { date: string; id: string })[];
}

interface Column {
  field: string;
  headerName: string;
  editable: boolean;
  format?: CallableFunction;
}

const formatISO = (iso: string) => format(parseISO(iso), "yyyy-MM-dd");

const SpreadsheetPage: NextPage<SpreadsheetPageProps> = (props: SpreadsheetPageProps) => {
  const { columns: columnsFromProps, data: initialData } = props;
  const initialColumns: Column[] = [
    {
      field: "date",
      headerName: "Date",
      editable: false,
      format: formatISO,
    },
  ];
  for (const column of columnsFromProps) {
    initialColumns.push({
      field: keyify(column),
      headerName: column,
      editable: true,
    });
  }
  const [columns, setColumns] = useState(initialColumns);
  const [data, setData] = useState(
    initialData.map((row) => {
      // const {date, ...rest} = row;
      // return {
      //   date: new Date(date),
      //   ...rest,
      // }
      return row;
    })
  );
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Layout>
      <NextSeo
        title={"Spreadsheet"}
        canonical={"/app/spreadsheet"}
        description={"Be your best self."}
        noindex
        nofollow
      />
      <Container maxWidth={"xl"}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} lg={9}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => {
                      return (
                        <TableCell key={column.field} align="center">
                          {column.headerName}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        {columns.map((column) => {
                          const field = column.field;
                          if (field == "id") {
                            return null;
                          }
                          const value = row[field];
                          return (
                            <TableCell key={column.field} align="center">
                              {column.format ? `${column.format(value)}` : `${value}`}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[7, 14, 28]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
export default SpreadsheetPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: "/auth/signin?callbackUrl=/app/spreadsheet",
        permanent: false,
      },
    };
  }
  const today = new Date();
  const ototoi = subDays(today, 2);
  const itsukago = addDays(today, 5);
  const props: SpreadsheetPageProps = {
    session,
    columns: [],
    data: [],
  };
  await client
    .query({
      query: gql`
        query Selections {
          calendars (where: {userId: {equals: "${session.user.id}"}}) {
            id
            color
            events (
              where: {
                start: {
                  gt: "${ototoi.toISOString()}"
                  lt: "${itsukago.toISOString()}"
                }
              }
            ) {
              title
              start
              end
            }
          }
          userActionSchedules (where: {userId: {equals: "${session.user.id}"}}) {
            actionSchedule {
              action {
                name
                slug
              }
              schedule {
                frequency
                multiplier
              }
            }
          }
          identitySelections (where: {userId: {equals: "${session.user.id}"}}) {
            identity {
              name
              slug
            }
          }
          valueSelections (where: {userId: {equals: "${session.user.id}"}}) {
            value {
              name
              slug
            }
          }
        }
      `,
    })
    .then((result) => {
      const userActionSchedules: (UserActionSchedule & {
        actionSchedule: ActionSchedule & {
          action: Action;
          schedule: Schedule;
        };
      })[] = result.data.userActionSchedules;
      const actionSchedules = userActionSchedules.map(
        (userActionSchedule) => userActionSchedule.actionSchedule
      );
      props.columns = actionSchedules?.map((actionSchedule) => actionSchedule.action.name) || [];
      const dates: Date[] = getDatesBetweenDates(ototoi, itsukago);
      for (const date of dates) {
        const dateString = date.toISOString();
        const row: any = { id: dateString, date: dateString };
        for (const actionSchedule of actionSchedules) {
          row[keyify(actionSchedule.action.name)] = 10;
        }
        props.data.push(row);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return { props };
};

const getDatesBetweenDates = (startDate: Date, endDate: Date) => {
  let dates: Date[] = [];
  //to avoid modifying the original date
  const theDate = new Date(startDate);
  while (theDate < endDate) {
    dates = [...dates, new Date(theDate)];
    theDate.setDate(theDate.getDate() + 1);
  }
  return dates;
};

const keyify = (string: string) => {
  return string.toLowerCase().replace(/ /g, "_").replace(/-/g, "_");
};
