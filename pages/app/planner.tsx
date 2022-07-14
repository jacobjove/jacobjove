import TasksBox from "@/components/actions/TasksBox";
import CalendarViewer from "@/components/calendar";
// import SwipeableTextMobileStepper from "@/components/SwipeableTextMobileStepper";
// import DateSelector from "@/components/dates/DateSelector";
import { useUser } from "@/components/contexts/UserContext";
import Layout from "@/components/Layout";
import { calendarEventFragment, taskFragment } from "@/graphql/fragments";
import { CalendarEvent, Task } from "@/graphql/schema";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import { gql, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import json2mq from "json2mq";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useState } from "react";
// import { Portal } from 'react-portal';

const QUERY = gql`
  query PlannerPage {
    tasks {
      ...TaskFragment
    }
    calendarEvents {
      ...CalendarEventFragment
    }
  }
  ${calendarEventFragment}
  ${taskFragment}
`;

interface PlannerPageData {
  tasks: Task[];
  calendarEvents: CalendarEvent[];
}

interface PlannerPageProps {
  data: PlannerPageData;
}

const PlannerPage: NextPage<PlannerPageProps> = (_props: PlannerPageProps) => {
  const user = useUser();
  // if (!user) console.error("No user!!!!!!!");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const { loading, error, data } = useQuery<PlannerPageData>(QUERY, {
    skip: !user?.id,
  });
  const displaySideBySide = useMediaQuery(json2mq({ minWidth: "1000px" }));

  if (!user) return null;
  // const { calendarEvents, calendars, tasks } = data;
  const { calendars } = user;
  const { tasks, calendarEvents } = data ?? {};
  // const calendarEvents =
  //   calendars?.reduce((previousValue, currentValue) => {
  //     return [...previousValue, ...(currentValue.events ?? [])];
  //   }, [] as CalendarEvent[]) ?? [];
  const displayMantras = !!user?.mantras?.length;

  return (
    <Layout>
      <NextSeo
        title={"Planner"}
        canonical={"/app/planner"}
        description={"Be your best self."}
        noindex
        nofollow
      />
      {/* <Box>
        <DateSelector date={selectedDate} setDate={setSelectedDate} />
      </Box> */}
      <Box
        display="flex"
        flexDirection={displaySideBySide ? "row" : "column"}
        justifyContent="center"
        alignItems="center"
        width={"100%"}
        height={"100%"}
        maxWidth={"100%"}
        maxHeight={"100%"}
        px={"0.25rem"}
        py={"0.5rem"}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: "40rem",
            height: "100%",
            maxHeight: "100%",
            flexBasis: "50%",
            flexGrow: 1,
            flexShrink: 0,
            m: "0.25rem",
          }}
        >
          <Box sx={{ padding: "0.2rem 0.2rem 0.5rem", height: "100%" }}>
            <CalendarViewer
              data={{ calendarEvents: calendarEvents ?? [], calendars: calendars ?? [] }}
              selectedDateState={[selectedDate, setSelectedDate]}
            />
          </Box>
        </Card>
        <Box
          sx={{
            width: "100%",
            maxWidth: "40rem",
            height: "100%",
            maxHeight: "100%",
            ...(displaySideBySide
              ? {
                  flexBasis: "50%",
                  flexGrow: 1,
                }
              : {}),
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Card
            sx={{
              width: "100%",
              flexGrow: 1,
              maxHeight: "100%",
            }}
          >
            <Box sx={{ padding: "0.2rem 0.2rem 0.5rem", height: "100%" }}>
              <TasksBox
                data={{ tasks: tasks ?? [] }}
                selectedDateState={[selectedDate, setSelectedDate]}
              />
            </Box>
          </Card>
          {displayMantras && (
            <Card
              sx={{
                mt: "0.25rem",
                flexGrow: 1,
              }}
            >
              <Box p={"0.5rem"} whiteSpace="normal" height={"100%"}>
                {/* <SwipeableTextMobileStepper items={user.mantras.map((mantra) => mantra.content)} /> */}
                {displayMantras &&
                  user?.mantras?.map((mantra, index) => {
                    return (
                      <Box p={"1rem"} key={mantra.id}>
                        <Typography>{mantra.content}</Typography>
                        {(user.mantras?.length || 0) > index + 1 && <hr />}
                      </Box>
                    );
                  })}
              </Box>
            </Card>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default PlannerPage;

export const getServerSideProps: GetServerSideProps = buildGetServerSidePropsFunc({
  unauthedRedirectDestination: `/auth/signin?callbackUrl=/app/planner`,
  query: {
    query: QUERY,
  },
});
