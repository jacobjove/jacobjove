import ActionBox from "@/components/actions/ActionBox";
import CalendarViewer from "@/components/Calendar";
import Layout from "@/components/Layout";
import { GET_USER_ACTIONS_AND_CALENDAR_EVENTS } from "@/graphql/queries";
// import { Action, UserAction, UserActionSchedule } from "@/graphql/schema";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { useQuery } from "@apollo/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useState } from "react";

interface PlannerPageProps {
  dateISO: string;
  // actionSchedules: (UserActionSchedule & {
  //   userAction: UserAction & {
  //     action: Action;
  //   };
  // })[];
  session: Session;
}

const PlannerPage: NextPage<PlannerPageProps> = (props: PlannerPageProps) => {
  const { dateISO } = props;
  const { data: session } = useSession();
  const [date, setDate] = useState(new Date(dateISO));
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    GET_USER_ACTIONS_AND_CALENDAR_EVENTS,
    {
      variables: {
        userId: session?.user?.id,
      },
      // Setting this value to true makes the component rerender when "networkStatus" changes,
      // so we are able to know if it is fetching more data.
      // notifyOnNetworkStatusChange: true,
    }
  );
  if (!session) {
    return null;
  }
  const { calendarEvents, userActions } = data;
  return (
    <Layout>
      <NextSeo
        title={"Day Planner"}
        canonical={"/app/planner"}
        description={"Be your best self."}
        noindex
        nofollow
      />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8} lg={6} order={{ xs: 2, sm: 1 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <CalendarViewer
                calendarEvents={calendarEvents}
                date={date}
                setDate={setDate}
                collapseViewMenu={true}
                session={session}
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
          // sx={{
          //   maxHeight: {
          //     xs: "33vh",
          //     sm: "auto",
          //   },
          // }}
        >
          <Grid item padding="1rem 0.25rem 0.1rem">
            <form>
              <TextField
                value=""
                label="Notes"
                variant="outlined"
                multiline
                rows={isMobile ? 2 : 12} // TODO
                fullWidth
                onChange={() => {
                  console.log("notes changed");
                }}
              />
            </form>
          </Grid>
          <Grid item padding="0.25rem">
            <div>
              {(!!userActions.length && <ActionBox userActions={userActions} />) || (
                <Typography component="p" textAlign="center">
                  No actions yet.
                </Typography>
              )}
            </div>
          </Grid>
          {!isMobile && (
            <Grid item padding={"0 0.25rem 0.25rem"}>
              <TextField
                value=""
                label="Study theme"
                sx={{ margin: "0.25rem 0" }}
                variant="outlined"
                // margin="dense"
                fullWidth
                onChange={() => {
                  console.log("study theme changed");
                }}
              />
              <TextField
                value=""
                label="Other study theme"
                sx={{ margin: "0.25rem 0" }}
                variant="outlined"
                // margin="dense"
                fullWidth
                onChange={() => {
                  console.log("other study theme changed");
                }}
              />
            </Grid>
          )}
          {!isMobile && (
            <Grid item padding={0.75}>
              {["", ""].map((value, i) => (
                <TextField
                  key={i}
                  value={value}
                  label="KPI"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  onChange={() => {
                    console.log("KPI changed");
                  }}
                />
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};
export default PlannerPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const session = await getSession({ req: context.req });
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: "/auth/signin?callbackUrl=/app/planner",
        permanent: false,
      },
    };
  }
  const today = new Date();
  const props: PlannerPageProps = {
    dateISO: today.toISOString(),
    session,
  };
  await apolloClient
    .query({
      query: GET_USER_ACTIONS_AND_CALENDAR_EVENTS,
      variables: {
        userId: session.user.id,
      },
    })
    .catch((e) => {
      console.error(e.networkError?.result?.errors);
    });
  return addApolloState(apolloClient, { props });
};
