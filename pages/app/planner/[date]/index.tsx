import ActionTable from "@/components/actions/ActionTable";
import CalendarViewer from "@/components/Calendar";
import Layout from "@/components/Layout";
import {
  Action,
  ActionSchedule,
  Calendar,
  CalendarEvent,
  Identity,
  IdentitySelection,
  Schedule,
  UserActionSchedule,
  Value,
  ValueSelection,
} from "@/graphql/schema";
import client from "@/lib/apollo/client/apollo";
import { gql } from "@apollo/client";
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

interface DatePlannerPageProps {
  dateISO: string;
  actionSchedules: (ActionSchedule & {
    action: Action;
    schedule: Schedule;
  })[];
  calendars: (Calendar & {
    events: CalendarEvent[];
  })[];
  identitySelections: (IdentitySelection & {
    identity: Identity;
  })[];
  valueSelections: (ValueSelection & {
    value: Value;
  })[];
  session: Session;
}

const DatePlannerPage: NextPage<DatePlannerPageProps> = (props: DatePlannerPageProps) => {
  const { dateISO, actionSchedules, calendars, identitySelections, valueSelections } = props;
  const { data: session } = useSession();
  const [date, setDate] = useState(new Date(dateISO));
  if (!session) {
    return null;
  }
  return (
    <Layout>
      <NextSeo
        title={"Day Planner"}
        canonical={"/app/planner"}
        description={"Be your best self."}
        noindex
        nofollow
      />
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Card raised sx={{ height: "100%" }}>
              <CardContent>
                <CalendarViewer
                  calendars={props.calendars}
                  date={date}
                  setDate={setDate}
                  session={session}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Card raised sx={{ height: "100%" }}>
              <CardContent>
                {(!!props.actionSchedules.length && (
                  <ActionTable actionSchedules={props.actionSchedules} />
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
          <Grid item xs={12} sm={6} lg={4}>
            <Card raised sx={{ height: "100%" }}>
              <CardHeader title="Identities" />
              <CardContent>
                {(!!props.identitySelections.length &&
                  props.identitySelections.map((identitySelection, index) => (
                    <p key={index}>
                      <Link href={`/identities/${identitySelection.identity.slug}`}>
                        <a>{identitySelection.identity.name}</a>
                      </Link>
                    </p>
                  ))) || (
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
          <Grid item xs={12} sm={6} lg={4}>
            <Card raised sx={{ height: "100%" }}>
              <CardHeader title="Values" />
              <CardContent>
                {(!!props.valueSelections.length &&
                  props.valueSelections.map((valueSelection, index) => (
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
export default DatePlannerPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=/app/planner/${context.params?.date}`,
        permanent: false,
      },
    };
  }
  const today = new Date();
  const ototoi = new Date(today);
  const itsukago = new Date(today);
  ototoi.setDate(today.getDate() - 2);
  itsukago.setDate(today.getDate() + 5);
  const props: DatePlannerPageProps = {
    dateISO: today.toISOString(),
    calendars: [],
    actionSchedules: [],
    identitySelections: [],
    valueSelections: [],
    session,
  };
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: "/auth/signin?callbackUrl=/app/planner", // TODO
        permanent: false,
      },
    };
  } else {
    let data;
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
        data = result.data;
        props.calendars = data?.calendars;
        props.actionSchedules = data?.userActionSchedules?.map(
          (userActionSchedule: UserActionSchedule) => userActionSchedule.actionSchedule
        );
        props.identitySelections = data?.identitySelections;
        props.valueSelections = data?.valueSelections;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return { props };
};
