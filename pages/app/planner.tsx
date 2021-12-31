import ActionBox from "@/components/actions/ActionBox";
import CalendarViewer from "@/components/Calendar";
import Layout from "@/components/Layout";
import { GET_CALENDAR_EVENTS } from "@/graphql/queries";
import { Action, UserAction, UserActionSchedule } from "@/graphql/schema";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql, useQuery } from "@apollo/client";
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
  actionSchedules: (UserActionSchedule & {
    userAction: UserAction & {
      action: Action;
    };
  })[];
  session: Session;
}

const PlannerPage: NextPage<PlannerPageProps> = (props: PlannerPageProps) => {
  const { dateISO, actionSchedules } = props;
  const { data: session } = useSession();
  const [date, setDate] = useState(new Date(dateISO));
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { loading, error, data, fetchMore, networkStatus } = useQuery(GET_CALENDAR_EVENTS, {
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
  const { calendarEvents } = data;
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
        <Grid
          item
          xs={12}
          md={8}
          lg={6}
          order={{ xs: 2, sm: 1 }}
          // sx={{
          //   maxHeight: {
          //     xs: "50vh",
          //     sm: "auto",
          //   },
          // }}
        >
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
          // sx={{
          //   maxHeight: {
          //     xs: "33vh",
          //     sm: "auto",
          //   },
          // }}
        >
          <Grid item flexShrink={0}>
            <form>
              <TextField
                value=""
                label="Notes"
                variant="outlined"
                multiline
                rows={isMobile ? 3 : 12} // TODO
                fullWidth
                onChange={() => {
                  console.log("notes changed");
                }}
              />
            </form>
          </Grid>
          <Grid item flexShrink={0} padding={0.75}>
            <div>
              {(!!actionSchedules.length && (
                <ActionBox userActionSchedules={actionSchedules} />
              )) || (
                <Typography component="p" textAlign="center">
                  No actions yet.
                </Typography>
              )}
            </div>
          </Grid>
          <Grid item flexShrink={0} padding={"0 0.25rem 0.25rem"}>
            <TextField
              value=""
              label="Study theme"
              sx={{ margin: "0.25rem 0" }}
              fullWidth
              onChange={() => {
                console.log("study theme changed");
              }}
            />
            <TextField
              value=""
              label="Other study theme"
              sx={{ margin: "0.25rem 0" }}
              fullWidth
              onChange={() => {
                console.log("other study theme changed");
              }}
            />
          </Grid>
          <Grid item flexShrink={0} padding={0.75}>
            {["...", "..."].map((value, i) => (
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
    actionSchedules: [],
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

  await apolloClient
    .query({
      query: gql`
          query Selections {
            calendars (where: {userId: {equals: "${session.user.id}"}}) {
              id
              color
              events {
                id
                title
                start
                end
              }
            }
            userActionSchedules (where: {
              userAction: {
                is: {
                  userId: {
                    equals: "${session.user.id}"
                  }
                }
              }
            }) {
              userAction {
                action {
                  name
                  slug
                }
              }
              frequency
              multiplier
            }
          }
        `,
    })
    .then((result) => {
      props.actionSchedules = result.data?.userActionSchedules;
    })
    .catch((error) => {
      console.error(error);
    });
  return addApolloState(apolloClient, { props });
};
