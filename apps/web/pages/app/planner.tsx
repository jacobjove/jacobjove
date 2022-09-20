import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import GoalsBox from "@web/components/actions/GoalsBox";
import HabitsBox from "@web/components/actions/HabitsBox";
import AppLayout from "@web/components/AppLayout";
import CalendarViewer from "@web/components/calendar";
import { useDeviceData } from "@web/components/contexts/DeviceContext";
import { useUser } from "@web/components/contexts/UserContext";
// import MantrasBox from "@web/components/data/mantras/MantrasBox";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TasksBox from "@web/components/data/tasks/TasksBox";
import FullScreenExpandableComponent from "@web/components/fullscreen/FullScreenExpandableComponent";
import FullScreenToggleToolbar from "@web/components/fullscreen/FullScreenToggleToolbar";
import { CalendarEventFragment } from "@web/generated/graphql/fragments/calendarEvent.fragment";
import { TaskFragment } from "@web/generated/graphql/fragments/task.fragment";
import { Goal, Habit } from "@web/generated/graphql/types";
import { buildGetServerSidePropsFunc } from "@web/utils/ssr";
import json2mq from "json2mq";
import { GetServerSideProps, NextPage } from "next";
import { PageWithAuth } from "next-auth";
import { NextSeo } from "next-seo";
import { Dispatch, FC, useEffect, useState } from "react";

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
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const { isLandscape } = useDeviceData();
  const isLessThan1000pxWide = useMediaQuery(json2mq({ minWidth: "1000px" }));
  const displaySideBySide = isLandscape || isLessThan1000pxWide;

  return (
    <AppLayout>
      <NextSeo
        title={"Planner"}
        canonical={"/app/planner"}
        description={"Be your best self."}
        noindex
        nofollow
      />
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
            <CalendarViewer selectedDateState={[selectedDate, setSelectedDate]} />
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
});

type ViewMode = "tasks" | "habits" | "goals";

interface PlannerCompanionStuffProps {
  selectedDateState: [Date, Dispatch<Date>];
}

const PlannerCompanionStuff: FC<PlannerCompanionStuffProps> = ({
  selectedDateState,
}: PlannerCompanionStuffProps) => {
  const { user } = useUser();
  const { goals, mantras, habits } = user ?? {};
  const [fullScreen, setFullScreen] = useState(false);
  const [view, setView] = useState<ViewMode>("tasks");
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
        }}
      >
        <FullScreenToggleToolbar fullScreenState={[fullScreen, setFullScreen]}>
          <ToggleButtonGroup
            exclusive
            value={view}
            onChange={(_, value: ViewMode) => setView(value)}
            size="small"
            color="primary"
            aria-label="text alignment"
            sx={{ mx: "2px", "& button": { px: "1rem", py: "3px" } }}
          >
            <ToggleButton value="tasks" aria-label="Tasks">
              {"Tasks"}
            </ToggleButton>
            <ToggleButton value="habits" aria-label="Habits">
              {"Habits"}
            </ToggleButton>
            <ToggleButton value="goals" aria-label="Goals">
              {"Goals"}
            </ToggleButton>
          </ToggleButtonGroup>
        </FullScreenToggleToolbar>
        <Box flexGrow={1}>
          {view === "tasks" ? (
            <TasksBox selectedDateState={selectedDateState} displayTitle={false} />
          ) : view === "habits" ? (
            <HabitsBox habits={habits ?? []} displayTitle={false} />
          ) : (
            <GoalsBox goals={goals ?? []} displayTitle={false} />
          )}
        </Box>
      </Box>
    </FullScreenExpandableComponent>
  );
};
