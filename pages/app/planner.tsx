import GoalsBox from "@/components/actions/GoalsBox";
import HabitsBox from "@/components/actions/HabitsBox";
import TasksBox from "@/components/actions/TasksBox";
import AppLayout from "@/components/AppLayout";
import CalendarViewer from "@/components/calendar";
import { useUser } from "@/components/contexts/UserContext";
import MantrasBox from "@/components/mantras/MantrasBox";
import {
  calendarEventFragment,
  goalFragment,
  habitFragment,
  taskFragment,
} from "@/graphql/fragments";
import { CalendarEvent, Goal, Habit, Mantra, Task } from "@/graphql/schema";
import { buildGetServerSidePropsFunc } from "@/utils/ssr";
import { gql, useQuery } from "@apollo/client";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";
import json2mq from "json2mq";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Dispatch, FC, useState } from "react";

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
  tasks: Task[];
  calendarEvents: CalendarEvent[];
  habits: Habit[];
  goals: Goal[];
}

interface PlannerPageProps {
  data: PlannerPageData;
}

interface PlannerCompanionStuffProps {
  useTabs?: boolean;
  selectedDateState: [Date, Dispatch<Date>];
  tasks: Task[];
  habits: Habit[];
  goals: Goal[];
  mantras: Mantra[];
}

const PlannerCompanionStuff: FC<PlannerCompanionStuffProps> = ({
  useTabs,
  selectedDateState,
  tasks,
  habits,
  goals,
  mantras,
}: PlannerCompanionStuffProps) => {
  const [selectedDate, setSelectedDate] = selectedDateState;
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return useTabs ? (
    <Box
      sx={{
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
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Tasks" value="1" />
            <Tab label="Habits" value="2" />
            <Tab label="Goals" value="3" />
            <Tab label="Mantras" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TasksBox
            data={{ tasks: tasks ?? [] }}
            selectedDateState={[selectedDate, setSelectedDate]}
            displayTitle={false}
          />
        </TabPanel>
        <TabPanel value="2">
          <HabitsBox habits={habits} displayTitle={false} />
        </TabPanel>
        <TabPanel value="3">
          <GoalsBox goals={goals} displayTitle={false} />
        </TabPanel>
        <TabPanel value="4">
          <MantrasBox mantras={mantras} displayTitle={false} />
        </TabPanel>
      </TabContext>
    </Box>
  ) : (
    <>
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
      <Card
        sx={{
          mt: "0.5rem",
          flexGrow: 1,
        }}
      >
        <HabitsBox habits={habits} />
      </Card>
      <Card
        sx={{
          mt: "0.5rem",
          flexGrow: 1,
        }}
      >
        <GoalsBox goals={goals} />
      </Card>
      <Card
        sx={{
          mt: "0.5rem",
          flexGrow: 1,
        }}
      >
        <MantrasBox mantras={mantras} />
      </Card>
    </>
  );
};

const PlannerPage: NextPage<PlannerPageProps> = (_props: PlannerPageProps) => {
  const user = useUser();
  // if (!user) console.error("No user!!!!!!!");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const { loading, error, data } = useQuery<PlannerPageData>(QUERY, {
    skip: !user?.id,
  });
  // const { isMobile } = useContext(DeviceContext);
  const displaySideBySide = useMediaQuery(json2mq({ minWidth: "1000px" }));

  if (!user) return null;
  // const { calendarEvents, calendars, tasks } = data;
  const { calendars } = user;
  const { tasks, calendarEvents, habits, goals } = data ?? {};
  // const calendarEvents =
  //   calendars?.reduce((previousValue, currentValue) => {
  //     return [...previousValue, ...(currentValue.events ?? [])];
  //   }, [] as CalendarEvent[]) ?? [];
  const mantras = user?.mantras;

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
        justifyContent="center"
        width={"100%"}
        height={"100%"}
        maxWidth={"100%"}
        maxHeight={"100%"}
        p={"0.5rem"}
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
            mr: "0.5rem",
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
            // height: "100%",
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
          <PlannerCompanionStuff
            useTabs={!displaySideBySide || true}
            tasks={tasks ?? []}
            habits={habits ?? []}
            goals={goals ?? []}
            mantras={mantras ?? []}
            selectedDateState={[selectedDate, setSelectedDate]}
          />
        </Box>
      </Box>
    </AppLayout>
  );
};

export default PlannerPage;

export const getServerSideProps: GetServerSideProps = buildGetServerSidePropsFunc({
  unauthedRedirectDestination: `/auth/signin?callbackUrl=/app/planner`,
  query: {
    query: QUERY,
  },
});
