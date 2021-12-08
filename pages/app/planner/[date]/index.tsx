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
import ActionTable from "@/components/actions/ActionTable";
import CalendarViewer from "@/components/Calendar";
import { useState } from "react";

interface DatePlannerPageProps {
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

const DatePlannerPage: NextPage<DatePlannerPageProps> = (props: DatePlannerPageProps) => {
  const currentDate = new Date(props.date);
  const [date, setDate] = useState(currentDate);
  return (
    <Layout>
      <NextSeo
        title={"Dashboard"}
        canonical={"/app/planner"}
        description={"Be your best self."}
        noindex
        nofollow
      />
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Card raised sx={{ height: "100%" }}>
              <CardHeader title="Calendar" />
              <CardContent>
                <CalendarViewer calendars={props.calendars} date={date} onDateChange={setDate} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Card raised sx={{ height: "100%" }}>
              <CardHeader title="Actions" />
              <CardContent>
                {(!!props.schedules.length && <ActionTable actions={props.schedules} />) || (
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
  const today = new Date();
  const ototoi = new Date(today);
  const itsukago = new Date(today);
  ototoi.setDate(today.getDate() - 2);
  itsukago.setDate(today.getDate() + 5);
  const props: DatePlannerPageProps = {
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
