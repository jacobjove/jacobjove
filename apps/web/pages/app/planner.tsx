import { gql } from "@apollo/client";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";
import GoalsBox from "@web/components/actions/GoalsBox";
import HabitsBox from "@web/components/actions/HabitsBox";
import AppLayout from "@web/components/AppLayout";
import CalendarViewer from "@web/components/calendar";
import { useDeviceData } from "@web/components/contexts/DeviceContext";
import { useUser } from "@web/components/contexts/UserContext";
// import MantrasBox from "@web/components/data/mantras/MantrasBox";
import TasksBox from "@web/components/data/tasks/TasksBox";
import FullScreenExpandableComponent from "@web/components/fullscreen/FullScreenExpandableComponent";
import FullScreenToggleToolbar from "@web/components/fullscreen/FullScreenToggleToolbar";
import {
  CalendarEventFragment,
  calendarEventFragment,
} from "@web/graphql/generated/fragments/calendarEvent.fragment";
import { goalFragment } from "@web/graphql/generated/fragments/goal.fragment";
import { habitFragment } from "@web/graphql/generated/fragments/habit.fragment";
import { TaskFragment, taskFragment } from "@web/graphql/generated/fragments/task.fragment";
import Goal from "@web/graphql/generated/types/Goal";
import Habit from "@web/graphql/generated/types/Habit";
import { buildGetServerSidePropsFunc } from "@web/utils/ssr";
import json2mq from "json2mq";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth } from "next-auth";
import { NextSeo } from "next-seo";
import { Dispatch, FC, useEffect, useState } from "react";

const QUERY = gql`
  query PlannerPage {
    tasks {
      ...TaskFragment
    }
    calendarEvents {
      ...CalendarEventFragment
    }
    habits {
      ...HabitFragment
    }
    goals {
      ...GoalFragment
    }
  }
  ${calendarEventFragment}
  ${taskFragment}
  ${habitFragment}
  ${goalFragment}
`;

interface PlannerPageData {
  tasks: TaskFragment[];
  calendarEvents: CalendarEventFragment[];
  habits: Habit[];
  goals: Goal[];
}

interface PlannerPageProps {
  data: PlannerPageData;
}

const PlannerPage: NextPage<PlannerPageProps> = (_props: PlannerPageProps) => {
  const { user } = useUser();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const isLessThan1000pxWide = useMediaQuery(json2mq({ minWidth: "1000px" }));
  const { isLandscape } = useDeviceData();
  const displaySideBySide = isLandscape || isLessThan1000pxWide;

  const { calendars, calendarEvents } = user ?? {};
  console.log(">>> Rendering planner page...");
  return (
    <AppLayout>
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
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"100%"}
        maxWidth={"100%"}
        maxHeight={"100%"}
        px={"0.5rem"}
        py={"0.25rem"}
        sx={{ "&> *": { m: "0.25rem" } }}
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
          }}
        >
          <Box sx={{ padding: "0 0.2rem 0.2rem 0.2rem", height: "100%", maxHeight: "100%" }}>
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
            maxHeight: "100%",
            ...(displaySideBySide
              ? {
                  flexBasis: "50%",
                  flexGrow: 1,
                  height: "100%",
                }
              : {}),
            display: "flex",
            flexDirection: "column",
          }}
        >
          <PlannerCompanionStuff selectedDateState={[selectedDate, setSelectedDate]} />
        </Box>
      </Box>
    </AppLayout>
  );
};

export default PlannerPage;

(PlannerPage as PageWithAuth).auth = true;

export const getServerSideProps: GetServerSideProps = buildGetServerSidePropsFunc({
  unauthedRedirectDestination: `/auth/signin?callbackUrl=/app/planner`,
  query: {
    query: QUERY,
  },
});

interface PlannerCompanionStuffProps {
  selectedDateState: [Date, Dispatch<Date>];
}

const PlannerCompanionStuff: FC<PlannerCompanionStuffProps> = ({
  selectedDateState,
}: PlannerCompanionStuffProps) => {
  const { user } = useUser();
  const { goals, mantras, habits } = user ?? {};
  const [fullScreen, setFullScreen] = useState(false);
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  useEffect(() => {
    !!mantras?.length && alert(mantras.join("\n\n"));
  }, [mantras]);
  return (
    <FullScreenExpandableComponent fullScreenState={[fullScreen, setFullScreen]}>
      <Box
        sx={{
          borderRadius: "4px",
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
          width: "100%",
          height: "100%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          typography: "body1",
          "& .MuiTabPanel-root": { p: 0, flexGrow: 1 },
          "& .MuiTabs-flexContainer": {
            justifyContent: "space-between",
          },
        }}
      >
        <FullScreenToggleToolbar fullScreenState={[fullScreen, setFullScreen]} />
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              sx={{ "& .MuiTab-root": { flexGrow: 1 } }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Tasks" value="1" />
              <Tab label="Habits" value="2" disabled={!user?.isAdmin} />
              <Tab label="Goals" value="3" disabled={!user?.isAdmin} />
              {/* <Tab label="Mantras" value="4" /> */}
            </TabList>
          </Box>
          <TabPanel value="1">
            <TasksBox selectedDateState={selectedDateState} displayTitle={false} />
          </TabPanel>
          <TabPanel value="2">
            <p style={{ textAlign: "center" }}>TODO: Enable this tab for non-admins.</p>
            <HabitsBox habits={habits ?? []} displayTitle={false} />
          </TabPanel>
          <TabPanel value="3">
            <p style={{ textAlign: "center" }}>TODO: Enable this tab for non-admins.</p>
            <GoalsBox goals={goals ?? []} displayTitle={false} />
          </TabPanel>
          {/* <TabPanel value="4">
            <MantrasBox mantras={mantras ?? []} displayTitle={false} />
          </TabPanel> */}
        </TabContext>
      </Box>
    </FullScreenExpandableComponent>
  );
};
