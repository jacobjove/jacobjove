import CalendarViewer from "@/components/calendar";
import Layout from "@/components/Layout";
import { GET_CALENDAR_EVENTS } from "@/graphql/queries";
// import { Calendar, CalendarEvent } from "@/graphql/schema";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { NetworkStatus, useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";

interface CalendarPageProps {
  dateISO: string;
  session: Session;
}

const CalendarPage: NextPage<CalendarPageProps> = (props: CalendarPageProps) => {
  const { dateISO } = props;
  const { data: session } = useSession();
  const { loading, error, data, fetchMore, networkStatus } = useQuery(GET_CALENDAR_EVENTS, {
    variables: {
      userId: session?.user?.id,
    },
  });
  const loadingItems = networkStatus === NetworkStatus.fetchMore;
  if (!session) return null;
  if (loadingItems) return <p>{"Loading..."}</p>;
  if (error) return <p>{"Error loading data."}</p>;
  const { calendarEvents } = data;
  return (
    <Layout>
      <NextSeo
        title={"Calendar"}
        canonical={"/app/calendar"}
        description={"Be your best self."}
        noindex
        nofollow
      />
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={9} maxHeight={"80vh"}>
          <Card sx={{ height: "100%" }}>
            <Box sx={{ padding: "0.2rem 0.2rem 0.5rem", height: "100%" }}>
              <CalendarViewer
                // calendars={calendars}
                calendarEvents={calendarEvents}
                session={session}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
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
  const today = new Date();
  const props: CalendarPageProps = {
    dateISO: today.toISOString(),
    session,
  };
  await apolloClient
    .query({
      query: GET_CALENDAR_EVENTS,
      variables: {
        userId: session.user.id,
      },
    })
    .catch((e) => {
      console.error(e.networkError?.result?.errors);
    });
  return addApolloState(apolloClient, { props });
};
