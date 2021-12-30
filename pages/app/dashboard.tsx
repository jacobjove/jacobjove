import ActionTable from "@/components/actions/ActionTable";
import CalendarViewer from "@/components/Calendar";
import IdentityTable from "@/components/identities/IdentityTable";
import Layout from "@/components/Layout";
import { GET_CALENDAR_EVENTS } from "@/graphql/queries";
import {
  Action,
  Identity,
  UserAction,
  UserActionSchedule,
  UserIdentity,
  Value,
  ValueSelection,
} from "@/graphql/schema";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useState } from "react";

interface DefaultPageProps {
  dateISO: string;
  actionSchedules: (UserActionSchedule & {
    userAction: UserAction & {
      action: Action;
    };
  })[];
  identitySelections: (UserIdentity & {
    identity: Identity;
  })[];
  valueSelections: (ValueSelection & {
    value: Value;
  })[];
  session: Session;
}

const DefaultPage: NextPage<DefaultPageProps> = (props: DefaultPageProps) => {
  const { dateISO, actionSchedules, identitySelections, valueSelections } = props;
  const { data: session } = useSession();
  const [date, setDate] = useState(new Date(dateISO));
  const { loading, error, data, fetchMore, networkStatus } = useQuery(GET_CALENDAR_EVENTS, {
    variables: {
      userId: session?.user?.id,
    },
  });
  if (!session) {
    return null;
  }
  const { calendarEvents } = data;
  return (
    <Layout>
      <NextSeo
        title={"Dashboard"}
        canonical={"/app/dashboard"}
        description={"Be your best self."}
        noindex
        nofollow
      />
      <Container maxWidth={"xl"}>
        <Grid container spacing={2} direction="row-reverse" justifyContent="center">
          <Grid item xs={12} md={6} lg={6} xl={4}>
            <Card sx={{ height: "100%" }}>
              <CardHeader title="Calendar" />
              <CardContent>
                <CalendarViewer
                  calendarEvents={calendarEvents}
                  date={date}
                  setDate={setDate}
                  session={session}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={2}>
            <Card sx={{ height: "100%" }}>
              <CardHeader title="Actions" />
              <CardContent>
                {(!!actionSchedules.length && (
                  <ActionTable userActionSchedules={actionSchedules} />
                )) || (
                  <Typography component="p" textAlign="center">
                    No actions yet.
                  </Typography>
                )}
                <Box textAlign="center" marginTop="1rem">
                  <Link href="/actions" passHref>
                    <Button component={"a"} variant="contained" color="secondary">
                      Explore actions
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={2}>
            <Card sx={{ height: "100%" }}>
              <CardHeader title="Identities" />
              <CardContent>
                {(!!identitySelections.length && (
                  <IdentityTable identitySelections={identitySelections} />
                )) || (
                  <Typography component="p" textAlign="center">
                    No identities yet.
                  </Typography>
                )}
                <Box textAlign="center" marginTop="1rem">
                  <Link href="/identities" passHref>
                    <Button component={"a"} variant="contained" color="secondary">
                      Explore identities
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={2}>
            <Card sx={{ height: "100%" }}>
              <CardHeader title="Values" />
              <CardContent>
                {(!!valueSelections.length &&
                  valueSelections.map((valueSelection, index) => (
                    <p key={index}>
                      <Link href={`/valueSelections/${valueSelection.value.slug}`}>
                        <a>{valueSelection.value.name}</a>
                      </Link>
                    </p>
                  ))) || (
                  <Typography component="p" textAlign="center">
                    No values yet.
                  </Typography>
                )}
                <Box textAlign="center" marginTop="1rem">
                  <Link href="/valueSelections" passHref>
                    <Button component={"a"} variant="contained" color="secondary">
                      Explore values
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
export default DefaultPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const session = await getSession({ req: context.req });
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=/app/dashboard`,
        permanent: false,
      },
    };
  }
  const today = new Date();
  const ototoi = new Date(today);
  const itsukago = new Date(today);
  ototoi.setDate(today.getDate() - 2);
  itsukago.setDate(today.getDate() + 5);
  const props: DefaultPageProps = {
    dateISO: today.toISOString(),
    actionSchedules: [],
    identitySelections: [],
    valueSelections: [],
    session,
  };
  let data;
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
      data = result.data;
      props.actionSchedules = result.data?.userActionSchedules;
      props.identitySelections = data?.identitySelections;
      props.valueSelections = data?.valueSelections;
    })
    .catch((error) => {
      console.error(error);
    });
  return addApolloState(apolloClient, { props });
};
