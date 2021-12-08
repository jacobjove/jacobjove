import ActionTable from "@/components/actions/ActionTable";
import CalendarViewer from "@/components/Calendar";
import Layout from "@/components/Layout";
import { Action, Calendar, CalendarEvent, Schedule } from "@/graphql/schema";
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
import { getSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useState } from "react";

interface PlannerPageProps {
  date: string;
  schedules: (Schedule & {
    action: Action;
  })[];
  calendars: (Calendar & {
    events: CalendarEvent[];
  })[];
}

const PlannerPage: NextPage<PlannerPageProps> = (props: PlannerPageProps) => {
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
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={8} lg={6}>
            <Card raised sx={{ height: "100%" }}>
              <CardContent>
                <CalendarViewer calendars={props.calendars} date={date} onDateChange={setDate} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Card raised sx={{ height: "100%" }}>
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
        </Grid>
      </Container>
    </Layout>
  );
};
export default PlannerPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  const today = new Date();
  const ototoi = new Date(today);
  const itsukago = new Date(today);
  ototoi.setDate(today.getDate() - 2);
  itsukago.setDate(today.getDate() + 5);
  const props: PlannerPageProps = {
    date: today.toISOString(),
    calendars: [],
    schedules: [],
  };
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: "/auth/signin?callbackUrl=/app/planner",
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
            schedules (where: {userId: {equals: "${session.user.id}"}}) {
              action {
                name
                slug
              }
              frequency
              multiplier
            }
          }
        `,
      })
      .then((result) => {
        data = result.data;
        props.calendars = data?.calendars;
        props.schedules = data?.schedules;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return { props };
};
