import {
  Action,
  IdentitySelection,
  Identity,
  Calendar,
  Schedule,
  CalendarEvent,
  Value,
  ValueSelection,
} from "@/graphql/schema";
import Layout from "@/components/Layout";
import client from "@/lib/apollo/client/apollo";
import { gql } from "@apollo/client";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { NextSeo } from "next-seo";
import { useState } from "react";
import { addDays, subDays, parseISO } from "date-fns";
import CalendarViewer from "@/components/Calendar";

interface DefaultPageProps {
  date: string;
  schedules: (Schedule & {
    action: Action;
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
}

const DefaultPage: NextPage<DefaultPageProps> = (props: DefaultPageProps) => {
  const currentDate = new Date(props.date);
  const [date, setDate] = useState(currentDate);
  const calendarEvents: CalendarEvent[] = [];
  props.calendars.forEach((calendar) => {
    calendar.events.forEach((event: CalendarEvent) => {
      calendarEvents.push(event);
    });
  });
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
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Card raised sx={{ height: "100%" }}>
              <CardContent>
                <CalendarViewer date={date} onDateChange={setDate} calendars={props.calendars} />
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
  const today = new Date();
  const ototoi = subDays(today, 2);
  const itsukago = addDays(today, 5);
  const props: DefaultPageProps = {
    date: today.toISOString(),
    calendars: [],
    schedules: [],
    identitySelections: [],
    valueSelections: [],
  };
  if (session?.user?.id) {
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
            schedules (where: {userId: {equals: "${session.user.id}"}}) {
              action {
                name
                slug
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
        props.calendars = result.data?.calendars;
        props.schedules = result.data?.schedules;
        props.identitySelections = result.data?.identitySelections;
        props.valueSelections = result.data?.valueSelections;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return { props };
};
