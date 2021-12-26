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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { addDays, subDays } from "date-fns";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useState } from "react";

interface DefaultPageProps {
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

const DefaultPage: NextPage<DefaultPageProps> = (props: DefaultPageProps) => {
  const { dateISO, actionSchedules, calendars, identitySelections, valueSelections } = props;
  const { data: session } = useSession();
  const [date, setDate] = useState(new Date(dateISO));
  const calendarEvents: CalendarEvent[] = [];
  calendars.forEach((calendar) => {
    calendar.events.forEach((event: CalendarEvent) => {
      calendarEvents.push(event);
    });
  });
  if (!session) {
    return null;
  }
  return (
    <Layout>
      <NextSeo
        title={"Calendar"}
        canonical={"/app/calendar"}
        description={"Be your best self."}
        noindex
        nofollow
      />
      <Container maxWidth={"xl"}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} lg={6}>
            <Card raised sx={{ height: "100%" }}>
              <CardContent>
                <CalendarViewer
                  date={date}
                  setDate={setDate}
                  calendars={calendars}
                  session={session}
                />
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
  const ototoi = subDays(today, 2);
  const itsukago = addDays(today, 5);
  const props: DefaultPageProps = {
    dateISO: today.toISOString(),
    calendars: [],
    actionSchedules: [],
    identitySelections: [],
    valueSelections: [],
    session,
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
      props.calendars = result.data?.calendars;
      props.actionSchedules = result.data?.userActionSchedules?.map(
        (userActionSchedule: UserActionSchedule) => userActionSchedule.actionSchedule
      );
      props.identitySelections = result.data?.identitySelections;
      props.valueSelections = result.data?.valueSelections;
    })
    .catch((error) => {
      console.error(error);
    });
  return { props };
};
