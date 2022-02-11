import TasksBox from "@/components/actions/TasksBox";
import CalendarViewer from "@/components/calendar";
import DashboardCard from "@/components/dashboard/components/DashboardCard";
import { DashboardComponentKey, DashboardLayouts } from "@/components/dashboard/types";
import IdentityTable from "@/components/identities/IdentityTable";
import ValuesTable from "@/components/values/ValuesTable";
import {
  calendarEventFragment,
  calendarFragment,
  habitFragment,
  identificationFragment,
  taskFragment,
  userValueFragment,
} from "@/graphql/fragments";
import {
  Calendar,
  CalendarEvent,
  Habit,
  Identification,
  Task,
  UserValue,
  Value,
} from "@/graphql/schema";
import { gql } from "@apollo/client";
import AddIcon from "@mui/icons-material/Add";
import { Box, Breakpoint } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Session } from "next-auth";
import { FC, memo, useEffect, useMemo, useState } from "react";
import { ItemCallback, Responsive, WidthProvider } from "react-grid-layout";

export const fragment = gql`
  fragment DashboardData on Query {
    calendars(where: { userId: { equals: $userId } }) {
      ...CalendarFragment
    }
    calendarEvents(where: { calendar: { is: { userId: { equals: $userId } } } }) {
      ...CalendarEventFragment
    }
    habits(where: { userId: { equals: $userId } }) {
      ...HabitFragment
    }
    tasks(where: { userId: { equals: $userId } }) {
      ...TaskFragment
    }
    userValues(where: { userId: { equals: $userId } }) {
      ...UserValueFragment
    }
    identifications(where: { userId: { equals: $userId } }) {
      ...IdentificationFragment
    }
  }
  ${calendarFragment}
  ${calendarEventFragment}
  ${habitFragment}
  ${taskFragment}
  ${userValueFragment}
  ${identificationFragment}
`;

const ResponsiveGridLayout = WidthProvider(Responsive);

export interface DashboardData {
  calendars: Calendar[];
  calendarEvents: CalendarEvent[];
  habits: Habit[];
  tasks: Task[];
  identifications: Identification[];
  userValues: (UserValue & {
    value: Value;
  })[];
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
  session: Session | null;
  error?: Error;
  height?: string;
}

const Dashboard: FC<DashboardProps> = (props: DashboardProps) => {
  const { data, loading, error, layouts, setLayouts, editing, session } = props;
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>("xs");
  const [speedDialOpen, setSpeedDialOpen] = useState(false);
  const handleSpeedDialOpen = () => {
    console.log("handleSpeedDialOpen");
    setSpeedDialOpen(true);
  };
  const handleSpeedDialClose = () => {
    console.log("handleSpeedDialClose");
    setSpeedDialOpen(false);
  };
  const speedDialActions = [
    {
      icon: <AddIcon />,
      name: "Add task",
      onClick: () => {
        alert("This functionality is not yet implemented.");
      },
    },
  ];
  const children = useMemo(() => {
    if (!data || !session) return [];
    const { calendarEvents, calendars, tasks, identifications, userValues } = data;
    const getDashboardComponent = (key: DashboardComponentKey) => {
      switch (key) {
        case "calendar":
          return (
            <DashboardCard title={"Calendar"} editing={editing} loading={loading}>
              <CalendarViewerMemoized
                data={{ calendarEvents, calendars }}
                loading={loading}
                defaultView="day"
                includeDateSelector
              />
            </DashboardCard>
          );
        case "tasks":
          return (
            <DashboardCard title={"Actions"} editing={editing} loading={loading}>
              <TasksBoxMemoized data={{ tasks }} />
            </DashboardCard>
          );
        case "identities":
          return (
            <DashboardCard title={"Identities"} editing={editing} loading={loading}>
              <IdentityTableMemoized identifications={identifications} />
            </DashboardCard>
          );
        case "values":
          return (
            <DashboardCard title={"Values"} editing={editing} loading={loading}>
              <ValuesTableMemoized userValues={userValues} />
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
  }, [layouts, editing, data, loading, session]);
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
      <Backdrop open={isMobile && speedDialOpen} />
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
      <SpeedDial
        ariaLabel="Dashboard speed dial"
        sx={{
          position: "sticky",
          bottom: 16,
          right: 0,
          marginRight: "16px",
          alignItems: "end",
        }}
        icon={<SpeedDialIcon />}
        onClose={handleSpeedDialClose}
        onOpen={handleSpeedDialOpen}
      >
        {speedDialActions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen // TODO: on mobile only?
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
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

const CalendarViewerMemoized = memo(CalendarViewer, function propsAreEqual(prevProps, nextProps) {
  const { data: prevData, ...prevOther } = prevProps;
  const { data: nextData, ...nextOther } = nextProps;
  return valuesAreEqual(prevData, nextData) && valuesAreEqual(prevOther, nextOther);
});

const TasksBoxMemoized = memo(TasksBox, function propsAreEqual(prevProps, nextProps) {
  const { data: prevData, ...prevOther } = prevProps;
  const { data: nextData, ...nextOther } = nextProps;
  return valuesAreEqual(prevData, nextData) && valuesAreEqual(prevOther, nextOther);
});

const ValuesTableMemoized = memo(ValuesTable, function propsAreEqual(prevProps, nextProps) {
  const { userValues: prevUserValues, ...prevOther } = prevProps;
  const { userValues: nextUserValues, ...nextOther } = nextProps;
  return prevUserValues === nextUserValues && valuesAreEqual(prevOther, nextOther);
});

const IdentityTableMemoized = memo(IdentityTable, function propsAreEqual(prevProps, nextProps) {
  const { identifications: prevIdentifications, ...prevOther } = prevProps;
  const { identifications: nextIdentifications, ...nextOther } = nextProps;
  return prevIdentifications === nextIdentifications && valuesAreEqual(prevOther, nextOther);
});

export default Dashboard;
