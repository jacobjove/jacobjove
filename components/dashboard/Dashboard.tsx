import ActionsBox from "@/components/actions/ActionsBox";
import CalendarViewer from "@/components/calendar";
import DashboardCard from "@/components/dashboard/components/DashboardCard";
import { DashboardComponentKey, DashboardLayouts } from "@/components/dashboard/types";
import IdentityTable from "@/components/identities/IdentityTable";
import ValuesTable from "@/components/values/ValuesTable";
import {
  actionCompletionFragment,
  calendarEventFragment,
  calendarFragment,
  routineFragment,
  userActionFragment,
  userIdentityFragment,
  userValueFragment,
} from "@/graphql/fragments";
import {
  ActionCompletion,
  Calendar,
  CalendarEvent,
  Routine,
  UserAction,
  UserIdentity,
  UserValue,
  Value,
} from "@/graphql/schema";
import { gql } from "@apollo/client";
import { Breakpoint } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { Session } from "next-auth";
import { FC, useEffect, useMemo, useState } from "react";
import { ItemCallback, Responsive, WidthProvider } from "react-grid-layout";

export const fragment = gql`
  fragment Dashboard on Query {
    calendars(where: { userId: { equals: $userId } }) {
      ...CalendarFragment
    }
    calendarEvents(where: { calendar: { is: { userId: { equals: $userId } } } }) {
      ...CalendarEventFragment
    }
    userActions(where: { userId: { equals: $userId } }) {
      ...UserActionFragment
    }
    actionCompletions(where: { userId: { equals: $userId } }) {
      ...ActionCompletionFragment
    }
    userValues(where: { userId: { equals: $userId } }) {
      ...UserValueFragment
    }
    userIdentities(where: { userId: { equals: $userId } }) {
      ...UserIdentityFragment
    }
    routines(where: { userId: { equals: $userId } }) {
      ...RoutineFragment
    }
  }
  ${calendarFragment}
  ${calendarEventFragment}
  ${userActionFragment}
  ${actionCompletionFragment}
  ${userValueFragment}
  ${userIdentityFragment}
  ${routineFragment}
`;

const ResponsiveGridLayout = WidthProvider(Responsive);

export interface DashboardData {
  calendars: Calendar[];
  calendarEvents: CalendarEvent[];
  routines: Routine[];
  userActions: UserAction[];
  actionCompletions: ActionCompletion[];
  userIdentities: UserIdentity[];
  userValues: (UserValue & {
    value: Value;
  })[];
}

const BREAKPOINTS = { xl: 1536, lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };

interface DashboardProps {
  data: DashboardData | undefined;
  loading: boolean;
  layouts: DashboardLayouts;
  setLayouts: (layouts: DashboardLayouts) => void;
  editing?: boolean;
  session: Session | null;
  error?: Error;
}

const Dashboard: FC<DashboardProps> = (props: DashboardProps) => {
  const { data, loading, error, layouts, setLayouts, editing, session } = props;
  if (error) console.error("ERROR", error);
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
  const speedDialActions: { name: string; icon: FC }[] = [
    // { icon: <FileCopyIcon />, name: 'Copy' },
    // { icon: <SaveIcon />, name: 'Save' },
    // { icon: <PrintIcon />, name: 'Print' },
    // { icon: <ShareIcon />, name: 'Share' },
  ];
  const children = useMemo(() => {
    if (!data || !session) return [];
    const {
      calendarEvents,
      calendars,
      routines,
      userActions,
      actionCompletions,
      userIdentities,
      userValues,
    } = data;
    const getDashboardComponent = (key: DashboardComponentKey) => {
      switch (key) {
        case "calendar":
          return (
            <DashboardCard title={"Calendar"} editing={editing} loading={loading}>
              <CalendarViewer data={{ calendarEvents, calendars }} loading={loading} />
            </DashboardCard>
          );
        case "actions":
          return (
            <DashboardCard title={"Actions"} editing={editing} loading={loading}>
              <ActionsBox data={{ userActions, routines, actionCompletions }} />
            </DashboardCard>
          );
        case "identities":
          return (
            <DashboardCard title={"Identities"} editing={editing} loading={loading}>
              <IdentityTable userIdentities={userIdentities} />
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
    // const componentMap = {
    //   calendar: (
    //     <DashboardCard title={"Calendar"} editing={editing} loading={loading}>
    //       <CalendarViewer
    //         data={{ calendarEvents, calendars }}
    //         loading={loading}
    //         session={session}
    //       />
    //     </DashboardCard>
    //   ),
    //   actions: (
    //     <DashboardCard title={"Actions"} editing={editing} loading={loading}>
    //       {(!!userActions.length && <ActionsBox userActions={userActions} />) || (
    //         <Typography component="p" textAlign="center">
    //           No actions yet.
    //         </Typography>
    //       )}
    //     </DashboardCard>
    //   ),
    //   identities: (
    //     <DashboardCard title={"Identities"} editing={editing} loading={loading}>
    //       {(!!userIdentities.length && <IdentityTable userIdentities={userIdentities} />) || (
    //         <Typography component="p" textAlign="center">
    //           No identities yet.
    //         </Typography>
    //       )}
    //       <Box textAlign="center" marginTop="1rem">
    //         <Link href="/identities" passHref>
    //           <IconButton
    //             component={"a"}
    //             color="info"
    //             style={{ marginLeft: 3 }}
    //             title="Explore identities"
    //           >
    //             <SearchIcon />
    //           </IconButton>
    //         </Link>
    //       </Box>
    //     </DashboardCard>
    //   ),
    //   values: (
    //     <DashboardCard title={"Values"} editing={editing} loading={loading}>
    //       {(!!userValues.length &&
    //         userValues.map((userValue, index) => (
    //           <p key={index}>
    //             <Link href={`/userValues/${userValue.value.slug}`}>
    //               <a>{userValue.value.name}</a>
    //             </Link>
    //           </p>
    //         ))) || (
    //         <Typography component="p" textAlign="center">
    //           No values yet.
    //         </Typography>
    //       )}
    //       <Box textAlign="center" marginTop="1rem">
    //         <Link href="/values" passHref>
    //           <IconButton
    //             component={"a"}
    //             color="info"
    //             style={{ marginLeft: 3 }}
    //             title="Explore values"
    //           >
    //             <SearchIcon />
    //           </IconButton>
    //         </Link>
    //       </Box>
    //     </DashboardCard>
    //   ),
    //   topics: (
    //     <DashboardCard title="Topics" editing={editing} loading={loading}>
    //       <TextField
    //         value=""
    //         label="Study theme"
    //         sx={{ margin: "0.25rem 0" }}
    //         variant="outlined"
    //         // margin="dense"
    //         fullWidth
    //         onChange={() => {
    //           console.log("study theme changed");
    //         }}
    //       />
    //       <TextField
    //         value=""
    //         label="Other study theme"
    //         sx={{ margin: "0.25rem 0" }}
    //         variant="outlined"
    //         // margin="dense"
    //         fullWidth
    //         onChange={() => {
    //           console.log("other study theme changed");
    //         }}
    //       />
    //     </DashboardCard>
    //   ),
    // };
    // TODO: refactor this; it currently expects each layout to have the same components.
    return Object.values(layouts)[0].map((component) => {
      return (
        <div key={component.i} className={`${editing ? "editing" : "not-editing"}`}>
          {getDashboardComponent(component.i)}
          {/* {componentMap[component.i]} */}
        </div>
      );
    });
  }, [layouts, editing, data, loading, session]);
  useEffect(() => {
    // console.log("Dashboard.tsx: useEffect");
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      let breakpoint: Breakpoint;
      if (width < 600) {
        breakpoint = "xs";
      } else if (width < 960) {
        breakpoint = "sm";
      } else if (width < 1000) {
        breakpoint = "md";
      } else if (width < 1280) {
        breakpoint = "lg";
      } else {
        breakpoint = "xl";
      }
      console.log("setting breakpoint to", breakpoint);
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
    <div style={{ position: "relative" }}>
      <Backdrop open={speedDialOpen} />
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
            console.log("Breakpoint changed to", breakpoint);
            setCurrentBreakpoint(breakpoint as Breakpoint);
          }}
          onDragStop={handleLayoutChange}
          onResizeStop={handleLayoutChange}
        >
          {children}
        </ResponsiveGridLayout>
      </div>
      <div style={{ position: "relative" }}>
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
    </div>
  );
};

export default Dashboard;
