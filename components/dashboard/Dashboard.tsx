import TasksBox from "@/components/actions/TasksBox";
import CalendarViewer from "@/components/calendar";
import DashboardCard from "@/components/dashboard/components/DashboardCard";
// import { DashboardComponentKey, DashboardLayouts } from "@/components/dashboard/types";
import IdentityTable from "@/components/identities/IdentityTable";
import ValuesTable from "@/components/values/ValuesTable";
import { calendarFragment } from "@/graphql/generated/fragments/calendar.fragment";
import { calendarEventFragment } from "@/graphql/generated/fragments/calendarEvent.fragment";
import { habitFragment } from "@/graphql/generated/fragments/habit.fragment";
import { identityFragment } from "@/graphql/generated/fragments/identity.fragment";
import { taskFragment } from "@/graphql/generated/fragments/task.fragment";
import { valueFragment } from "@/graphql/generated/fragments/value.fragment";
import { Calendar } from "@/graphql/generated/models/calendar.model";
import { CalendarEvent } from "@/graphql/generated/models/calendarEvent.model";
import { Habit } from "@/graphql/generated/models/habit.model";
import { Identity } from "@/graphql/generated/models/identity.model";
import { Task } from "@/graphql/generated/models/task.model";
import { Value } from "@/graphql/generated/models/value.model";
import { DashboardComponentKey, DashboardLayouts } from "@/graphql/schema/definitions/Dashboard";
import { gql } from "@apollo/client";
import { Box, Breakpoint } from "@mui/material";
import { useSession } from "next-auth/react";
import { FC, memo, useEffect, useMemo, useState } from "react";
import { ItemCallback, Responsive, WidthProvider } from "react-grid-layout";

export const fragment = gql`
  fragment DashboardData on Query {
    calendars {
      ...CalendarFragment
    }
    calendarEvents(where: { calendar: { is: { enabled: { equals: true } } } }) {
      ...CalendarEventFragment
    }
    habits {
      ...HabitFragment
    }
    tasks {
      ...TaskFragment
    }
    values {
      ...ValueFragment
    }
    identities {
      ...IdentityFragment
    }
  }
  ${calendarFragment}
  ${calendarEventFragment}
  ${habitFragment}
  ${taskFragment}
  ${valueFragment}
  ${identityFragment}
`;

const ResponsiveGridLayout = WidthProvider(Responsive);

export interface DashboardData {
  calendars: Calendar[];
  calendarEvents: CalendarEvent[];
  habits: Habit[];
  tasks: Task[];
  identities: Identity[];
  values: Value[];
}

// Do not change these values without also changing the MUI breakpoints!
// https://mui.com/customization/breakpoints/#default-breakpoints
// https://mui.com/customization/breakpoints/#custom-breakpoints
const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

interface DashboardProps {
  data: DashboardData | undefined;
  loading: boolean;
  layouts: DashboardLayouts;
  setLayouts: (layouts: DashboardLayouts) => void;
  editing?: boolean;
  error?: Error;
  height?: string;
}

const Dashboard: FC<DashboardProps> = (props: DashboardProps) => {
  const { data, loading, error, layouts, setLayouts, editing } = props;
  const { data: session } = useSession();
  const selectedDateState = useState<Date>(new Date());
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>("xs");
  const children = useMemo(() => {
    if (!data || !session) return [];
    const { calendarEvents, calendars, tasks, identities, values } = data;
    const getDashboardComponent = (key: DashboardComponentKey) => {
      switch (key) {
        case "calendar":
          return (
            <DashboardCard title={"Calendar"} editing={editing} loading={loading}>
              <CalendarViewerMemoized
                data={{ calendarEvents, calendars }}
                selectedDateState={selectedDateState}
                loading={loading}
                defaultView="day"
                includeDateSelector
              />
            </DashboardCard>
          );
        case "tasks":
          return (
            <DashboardCard title={"Actions"} editing={editing} loading={loading}>
              <TasksBox selectedDateState={selectedDateState} />
            </DashboardCard>
          );
        case "identities":
          return (
            <DashboardCard title={"Identities"} editing={editing} loading={loading}>
              <IdentityTableMemoized data={{ identities }} />
            </DashboardCard>
          );
        case "values":
          return (
            <DashboardCard title={"Values"} editing={editing} loading={loading}>
              <ValuesTableMemoized data={{ values }} />
            </DashboardCard>
          );
        case "topics":
          return <DashboardCard title="Topics" editing={editing} loading={loading}></DashboardCard>;
        default:
          return (
            <DashboardCard title={""} editing={editing} loading={loading}>
              <p>Not implemented.</p>
            </DashboardCard>
          );
      }
    };
    // TODO: refactor this; it currently expects each layout to have the same components.
    return Object.values(layouts)[0].map((component) => {
      return (
        <div key={component.i} className={`${editing ? "editing" : "not-editing"}`}>
          {getDashboardComponent(component.i)}
        </div>
      );
    });
  }, [layouts, editing, data, loading, selectedDateState, session]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      let breakpoint: Breakpoint = "xl";
      for (const [breakpointKey, breakpointValue] of Object.entries(BREAKPOINTS)) {
        if (width > breakpointValue) {
          breakpoint = breakpointKey as keyof typeof BREAKPOINTS;
        } else {
          break;
        }
      }
      setCurrentBreakpoint(breakpoint);
    }
  }, [setCurrentBreakpoint]);
  if (!session || !data) {
    console.error(error);
    return null;
  }
  const handleLayoutChange: ItemCallback = (layout, _oldItem, _newItem) => {
    console.log("layout changed", layout, _oldItem, _newItem);
    if (currentBreakpoint) {
      const newLayouts = {
        ...layouts,
        [currentBreakpoint]: layout,
      };
      setLayouts(newLayouts);
    }
  };
  // console.log("Rendering dashboard with children", children);
  return (
    <div
      style={{
        position: "relative",
        height: props.height ?? "auto",
        maxHeight: props.height ?? "auto",
      }}
    >
      <Box
        position="relative"
        sx={{
          "& .react-resizable-handle": {
            color: (theme) => (theme.palette.mode === "light" ? "gray" : "whitesmoke"),
            "&::after": {
              borderRight: (theme) =>
                `2px solid ${
                  theme.palette.mode === "light" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,255.4)"
                } !important`,
              borderBottom: (theme) =>
                `2px solid ${
                  theme.palette.mode === "light" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,255.4)"
                } !important`,
            },
          },
          "& .not-editing .react-resizable-handle": {
            display: "none !important",
          },
        }}
      >
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          // TODO: make sure this plays nicely with MUI theme breakpoints:
          breakpoints={BREAKPOINTS}
          containerPadding={{ xl: [24, 12] }}
          margin={{ md: [18, 18], lg: [24, 24], xl: [24, 24] }}
          cols={{ xl: 24, lg: 18, md: 12, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={48}
          draggableHandle=".drag-anchor"
          onLayoutChange={(components) => {
            const layoutIsUnchanged = true;
            if (layoutIsUnchanged) {
              console.debug("onLayoutChange");
            } else {
              console.log("onLayoutChange", components);
            }
          }}
          onBreakpointChange={(breakpoint) => {
            console.log("Breakpoint changed to", breakpoint);
            setCurrentBreakpoint(breakpoint as Breakpoint);
          }}
          onDragStop={handleLayoutChange}
          onResizeStop={handleLayoutChange}
        >
          {children}
        </ResponsiveGridLayout>
      </Box>
    </div>
  );
};

function valuesAreEqual<T extends Record<string, any>>(a: T, b: T) {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== new Set([...aKeys, ...bKeys]).size) return false;
  for (const key of aKeys) {
    if (a[key] !== b[key]) return false;
  }
  return true;
}

function memoize<P extends { data: Record<string, any> }>(component: FC<P>) {
  return memo(component, function propsAreEqual(prevProps, nextProps) {
    const { data: prevData, ...prevOther } = prevProps;
    const { data: nextData, ...nextOther } = nextProps;
    return valuesAreEqual(prevData, nextData) && valuesAreEqual(prevOther, nextOther);
  });
}

const CalendarViewerMemoized = memoize(CalendarViewer);
// const TasksBoxMemoized = memoize(TasksBox);
const ValuesTableMemoized = memoize(ValuesTable);
const IdentityTableMemoized = memoize(IdentityTable);

export default Dashboard;
