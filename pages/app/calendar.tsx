import TasksBox from "@/components/actions/TasksBox";
import { fragment as tasksBoxFragment } from "@/components/actions/TasksTable";
import CalendarViewer, { fragment as calendarViewerFragment } from "@/components/calendar";
import { CalendarData } from "@/components/calendar/views/props";
import Layout from "@/components/Layout";
import { GET_CALENDAR_EVENTS } from "@/graphql/queries";
import { Task } from "@/graphql/schema";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql, useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import json2mq from "json2mq";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";

interface CalendarPageProps {
  dateISO: string;
  session: Session;
}

const QUERY = gql`
  query CalendarPage($userId: Int!, $date: DateTime!) {
    ...CalendarViewer
    ...TasksTable
  }
  ${calendarViewerFragment}
  ${tasksBoxFragment}
`;

const CalendarPage: NextPage<CalendarPageProps> = ({ dateISO }: CalendarPageProps) => {
  const { data: session } = useSession();
  const { loading, error, data } = useQuery<CalendarData & { tasks: Task[] }>(QUERY, {
    variables: {
      userId: session?.user?.id,
      date: dateISO,
    },
  });
  const displaySideBySide = useMediaQuery(json2mq({ minWidth: "1000px" }));
  if (!session || !data) return null;
  const { calendarEvents, calendars, tasks } = data;
  return (
    <Layout>
      <NextSeo
        title={"Calendar"}
        canonical={"/app/calendar"}
        description={"Be your best self."}
        noindex
        nofollow
      />
      <Box
        display="flex"
        flexDirection={displaySideBySide ? "row" : "column"}
        justifyContent="center"
        alignItems="center"
        width={"100%"}
        height={"100%"}
        maxWidth={"100%"}
        maxHeight={"100%"}
        px={"0.25rem"}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: "40rem",
            height: "100%",
            maxHeight: "100%",
            flexBasis: "50%",
            flexGrow: 1,
            flexShrink: 0,
            m: "0.25rem",
          }}
        >
          <Box sx={{ padding: "0.2rem 0.2rem 0.5rem", height: "100%" }}>
            <CalendarViewer
              data={{ calendarEvents, calendars }}
              loading={loading}
              error={error}
              includeDateSelector
            />
          </Box>
        </Card>
        <Card
          sx={{
            width: "100%",
            maxWidth: "40rem",
            height: "100%",
            maxHeight: "100%",
            m: "0.25rem",
            ...(displaySideBySide
              ? {
                  flexBasis: "50%",
                  flexGrow: 1,
                }
              : {}),
          }}
        >
          <Box sx={{ padding: "0.2rem 0.2rem 0.5rem", height: "100%" }}>
            <TasksBox data={{ tasks }} />
          </Box>
        </Card>
      </Box>
    </Layout>
  );
};
export default CalendarPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const session = await getSession({ req: context.req });
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=/app/calendar`,
        permanent: false,
      },
    };
  }
  const props: CalendarPageProps = {
    dateISO: new Date().toISOString(),
    session,
  };
  await apolloClient
    .query({
      query: GET_CALENDAR_EVENTS,
      variables: {
        userId: session.user.id,
        date: new Date().toISOString(),
      },
    })
    .catch((e) => {
      if (e.networkError?.result?.errors) {
        e.networkError.result.errors.forEach(
          (error: {
            message: string;
            extensions: { code: string; exception: { stacktrace: string[] } };
          }) => {
            console.error(error.message);
            console.log(error.extensions.exception.stacktrace.join("\n"), { depth: null });
          }
        );
      } else {
        console.error(e);
      }
    });
  return addApolloState(apolloClient, { props });
};
