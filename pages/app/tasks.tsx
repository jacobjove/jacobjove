import ActionsBox, { fragment as taskBoxFragment } from "@/components/actions/ActionsBox";
import CalendarViewer, { fragment as calendarViewerFragment } from "@/components/calendar";
import Layout from "@/components/Layout";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql, useQuery } from "@apollo/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";

interface PlannerPageProps {
  session: Session;
}

const QUERY = gql`
  query TasksPage($userId: String!) {
    ...CalendarViewer
    ...ActionsBox
  }
  ${calendarViewerFragment}
  ${taskBoxFragment}
`;

const TasksPage: NextPage<PlannerPageProps> = (props: PlannerPageProps) => {
  const { data: session } = useSession();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { loading, error, data } = useQuery(QUERY, {
    variables: {
      userId: session?.user?.id,
    },
    // Setting this value to true makes the component rerender when "networkStatus" changes,
    // so we are able to know if it is fetching more data.
    // notifyOnNetworkStatusChange: true,
  });
  if (!session) {
    return null;
  }
  if (!data) {
    return null;
  }
  const { calendarEvents, calendars, userActions, actionCompletions, routines } = data;
  return (
    <Layout>
      <NextSeo
        title={"Day Planner"}
        canonical={"/app/planner"}
        description={"Be your best self."}
        noindex
        nofollow
      />
      <Grid container spacing={2} justifyContent="center" height={"100%"} maxHeight={"100%"}>
        <Grid
          item
          xs={12}
          md={8}
          lg={6}
          order={{ xs: 2, sm: 1 }}
          height={"100%"}
          maxHeight={"100%"}
        >
          <Card sx={{ height: "100%", maxHeight: "100%" }}>
            <CardContent sx={{ height: "100%", maxHeight: "100%" }}>
              <CalendarViewer
                loading={loading}
                data={{ calendarEvents, calendars }}
                error={error}
                collapseViewMenu={true}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={4}
          lg={3}
          order={{ xs: 1, sm: 2 }}
          flexDirection="column"
          maxHeight={isMobile ? "35vh" : "auto"}
        >
          <Grid item padding="0.25rem">
            <div>
              <ActionsBox data={{ userActions, routines, actionCompletions }} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};
export default TasksPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const session = await getSession({ req: context.req });
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: "/auth/signin?callbackUrl=/app/tasks",
        permanent: false,
      },
    };
  }
  const props: PlannerPageProps = {
    session,
  };
  await apolloClient
    .query({
      query: QUERY,
      variables: {
        userId: session.user.id,
      },
    })
    .catch((e) => {
      console.error(e.networkError?.result?.errors);
    });
  return addApolloState(apolloClient, { props });
};
