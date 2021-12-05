import {
  Action,
  IdentitySelection,
  Identity,
  Calendar,
  Schedule,
  Event,
  Value,
  ValueSelection,
} from "@/prisma/generated";
import Layout from "@/components/Layout";
import client from "@/lib/apollo/client/apollo";
import { gql } from "@apollo/client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NextSeo } from "next-seo";
import ActionTable from "@/components/ActionTable";
import CalendarViewer from "@/components/Calendar";

interface DefaultPageProps {
  date: string;
  schedules: (Schedule & {
    action: Action;
  })[];
  calendars: (Calendar & {
    events: Event[];
  })[];
  identitySelections: (IdentitySelection & {
    identity: Identity;
  })[];
  valueSelections: (ValueSelection & {
    value: Value;
  })[];
}

const DefaultPage: NextPage<DefaultPageProps> = (props: DefaultPageProps) => {
  const currentDate = props.date;
  const schedulerData = [];
  props.calendars.forEach((calendar) => {
    console.log("calendar: ", calendar);
    calendar.events.forEach((event) => {
      schedulerData.push({
        startDate: event.start,
        endDate: event.end,
        title: event.name,
      });
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
          <Grid item xs={12} lg={8}>
            <Card raised sx={{ height: "100%" }}>
              <CardHeader title="Calendar" />
              <CardContent>
                <CalendarViewer data={schedulerData} initialDate={currentDate} />
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
  const ototoi = new Date(today);
  const itsukago = new Date(today);
  ototoi.setDate(today.getDate() - 2);
  itsukago.setDate(today.getDate() + 5);
  const props: DefaultPageProps = {
    date: today.toISOString(),
    calendars: [],
    schedules: [],
    identitySelections: [],
    valueSelections: [],
  };
  if (session?.user?.id) {
    let data;
    await client
      .query({
        query: gql`
          query Selections {
            calendars (where: {userId: {equals: "${session.user.id}"}}) {
              events (
                where: {
                  start: {
                    gt: "${ototoi.toISOString()}"
                    lt: "${itsukago.toISOString()}"
                  }
                }
              ) {
                name
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
        data = result.data;
        props.calendars = data?.calendars;
        props.schedules = data?.schedules;
        props.identitySelections = data?.identitySelections;
        props.valueSelections = data?.valueSelections;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return { props };
};
