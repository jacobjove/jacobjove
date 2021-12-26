import ActionTable from "@/components/actions/ActionTable";
import CalendarViewer from "@/components/Calendar";
import Layout from "@/components/Layout";
import {
  Action,
  ActionSchedule,
  Calendar,
  CalendarEvent,
  Schedule,
  UserActionSchedule,
} from "@/graphql/schema";
import client from "@/lib/apollo/client/apollo";
import { gql } from "@apollo/client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useState } from "react";

interface PlannerPageProps {
  dateISO: string;
  actionSchedules: (ActionSchedule & {
    action: Action;
    schedule: Schedule;
  })[];
  calendars: (Calendar & {
    events: CalendarEvent[];
  })[];
  session: Session;
}

const PlannerPage: NextPage<PlannerPageProps> = (props: PlannerPageProps) => {
  const { dateISO, actionSchedules, calendars, session } = props;
  const currentDate = new Date(dateISO);
  const [date, setDate] = useState(currentDate);
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
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={8} lg={6}>
            <Card raised sx={{ height: "100%" }}>
              <CardContent>
                <CalendarViewer
                  calendars={calendars}
                  date={date}
                  setDate={setDate}
                  session={session}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Card raised sx={{ height: "100%" }}>
              <CardContent>
                {(!!actionSchedules.length && (
                  <ActionTable actionSchedules={actionSchedules} />
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
        </Grid>
      </Container>
    </Layout>
  );
};
export default PlannerPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
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
  const ototoi = new Date(today);
  const itsukago = new Date(today);
  ototoi.setDate(today.getDate() - 2);
  itsukago.setDate(today.getDate() + 5);
  const props: PlannerPageProps = {
    dateISO: today.toISOString(),
    calendars: [],
    actionSchedules: [],
    session,
  };
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
          }
        `,
    })
    .then((result) => {
      data = result.data;
      props.calendars = data?.calendars;
      props.actionSchedules = result.data?.userActionSchedules?.map(
        (userActionSchedule: UserActionSchedule) => userActionSchedule.actionSchedule
      );
    })
    .catch((error) => {
      console.error(error);
    });
  return { props };
};
