import CalendarViewer, {
  fragment as calendarViewerFragment,
} from "@/components/calendar/CalendarViewer";
import { CalendarData } from "@/components/calendar/views/props";
import Layout from "@/components/Layout";
import { GET_CALENDAR_EVENTS } from "@/graphql/queries";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql, useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";

interface CalendarPageProps {
  session: Session;
}

const QUERY = gql`
  query CalendarPage($userId: String!) {
    ...CalendarViewer
  }
  ${calendarViewerFragment}
`;

const CalendarPage: NextPage<CalendarPageProps> = (props: CalendarPageProps) => {
  const { data: session } = useSession();
  const { loading, error, data } = useQuery<CalendarData>(QUERY, {
    variables: {
      userId: session?.user?.id,
    },
  });
  console.log(QUERY);
  if (!session) return null;
  if (loading) return <p>{"Loading..."}</p>;
  if (error) return <p>{"Error loading data."}</p>;
  if (!data) return null;
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
              <CalendarViewer data={data} loading={loading} error={error} />
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
  const props: CalendarPageProps = { session };
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
