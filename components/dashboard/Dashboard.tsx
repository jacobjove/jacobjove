import ActionsBox from "@/components/actions/ActionsBox";
import CalendarViewer from "@/components/calendar";
import DashboardCard from "@/components/dashboard/components/DashboardCard";
import { DashboardComponentKey, DashboardLayouts } from "@/components/dashboard/types";
import IdentityTable from "@/components/identities/IdentityTable";
import ValuesTable from "@/components/values/ValuesTable";
import {
  actionFragment,
  calendarEventFragment,
  calendarFragment,
  identificationFragment,
  userValueFragment,
} from "@/graphql/fragments";
import {
  Action,
  Calendar,
  CalendarEvent,
  Identification,
  UserValue,
  Value,
} from "@/graphql/schema";
import { gql } from "@apollo/client";
import AddIcon from "@mui/icons-material/Add";
import { Breakpoint } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Session } from "next-auth";
import { FC, useEffect, useMemo, useState } from "react";
import { ItemCallback, Responsive, WidthProvider } from "react-grid-layout";

export const fragment = gql`
  fragment DashboardData on Query {
    calendars(where: { userId: { equals: $userId } }) {
      ...CalendarFragment
    }
    calendarEvents(where: { calendar: { is: { userId: { equals: $userId } } } }) {
      ...CalendarEventFragment
    }
    actions(where: { userId: { equals: $userId } }) {
      ...ActionFragment
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
  ${actionFragment}
  ${userValueFragment}
  ${identificationFragment}
`;

const ResponsiveGridLayout = WidthProvider(Responsive);

export interface DashboardData {
  calendars: Calendar[];
  calendarEvents: CalendarEvent[];
  actions: Action[];
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
  const speedDialActions = [{ icon: <AddIcon />, name: "Add task" }];
  const children = useMemo(() => {
    if (!data || !session) return [];
    const { calendarEvents, calendars, actions, identifications, userValues } = data;
    const getDashboardComponent = (key: DashboardComponentKey) => {
      switch (key) {
        case "calendar":
          return (
            <DashboardCard title={"Calendar"} editing={editing} loading={loading}>
              <CalendarViewer
                data={{ calendarEvents, calendars }}
                loading={loading}
                defaultView="day"
                includeDateSelector
              />
            </DashboardCard>
          );
        case "actions":
          return (
            <DashboardCard title={"Actions"} editing={editing} loading={loading}>
              <ActionsBox data={{ actions }} />
            </DashboardCard>
          );
        case "identities":
          return (
            <DashboardCard title={"Identities"} editing={editing} loading={loading}>
              <IdentityTable identifications={identifications} />
            </DashboardCard>
          );
        case "values":
          return (
            <DashboardCard title={"Values"} editing={editing} loading={loading}>
              <ValuesTable userValues={userValues} />
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
    console.log("Dashboard.tsx: useEffect");
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
      <div style={{ position: "relative" }}>
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
            // console.log("Breakpoint changed to", breakpoint);
            setCurrentBreakpoint(breakpoint as Breakpoint);
          }}
          onDragStop={handleLayoutChange}
          onResizeStop={handleLayoutChange}
        >
          {children}
        </ResponsiveGridLayout>
      </div>
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
            onClick={handleSpeedDialClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

export default Dashboard;
