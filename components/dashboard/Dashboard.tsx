import ActionBox from "@/components/actions/ActionBox";
import CalendarViewer from "@/components/calendar";
import IdentityTable from "@/components/identities/IdentityTable";
import {
  calendarEventFragment,
  userActionFragment,
  userIdentityFragment,
  userValueFragment,
} from "@/graphql/fragments";
import {
  Action,
  CalendarEvent,
  Identity,
  UserAction,
  UserActionSchedule,
  UserIdentity,
  UserValue,
  Value,
} from "@/graphql/schema";
import { gql } from "@apollo/client";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Session } from "next-auth";
import Link from "next/link";
import { FC, useMemo } from "react";
import { Layout as LayoutItem, Responsive, WidthProvider } from "react-grid-layout";

export const fragment = gql`
  fragment Dashboard on Query {
    calendars(where: { userId: { equals: $userId } }) {
      id
    }
    calendarEvents(where: { calendar: { is: { userId: { equals: $userId } } } }) {
      ...CalendarEventFragment
    }
    userActions(where: { userId: { equals: $userId } }) {
      ...UserActionFragment
    }
    userValues(where: { userId: { equals: $userId } }) {
      ...UserValueFragment
    }
    userIdentities(where: { userId: { equals: $userId } }) {
      ...UserIdentityFragment
    }
  }
  ${calendarEventFragment}
  ${userActionFragment}
  ${userValueFragment}
  ${userIdentityFragment}
`;

const ResponsiveGridLayout = WidthProvider(Responsive);

export interface DashboardLayouts {
  xs: DashboardComponent[];
  sm?: DashboardComponent[];
  md?: DashboardComponent[];
  lg?: DashboardComponent[];
  xl?: DashboardComponent[];
}

// https://github.com/react-grid-layout/react-grid-layout#grid-item-props
interface DashboardComponent extends LayoutItem {
  i: "calendar" | "identities" | "actions" | "values";
}

const CardTitle: FC<{ title: string }> = ({ title }) => (
  <Typography fontSize="0.8rem" m="0.25rem 0.5rem" fontWeight="bold">
    {title}
  </Typography>
);

export interface DashboardData {
  calendarEvents: CalendarEvent[];
  userActions: (UserAction & {
    action: Action;
    schedules: UserActionSchedule[];
  })[];
  userIdentities: (UserIdentity & {
    identity: Identity;
  })[];
  userValues: (UserValue & {
    value: Value;
  })[];
}

// export interface DashboardLayouts {
//     xs: DashboardComponent[];
//     sm?: DashboardComponent[];
//     md?: DashboardComponent[];
//     lg?: DashboardComponent[];
//     xl?: DashboardComponent[];
// }

interface DashboardProps {
  data: DashboardData | undefined;
  loading: boolean;
  layouts: DashboardLayouts;
  editing?: boolean;
  session: Session | null;
  error?: Error;
}

const Dashboard: FC<DashboardProps> = (props: DashboardProps) => {
  const { data, loading, error, layouts, editing, session } = props;
  const children = useMemo(() => {
    if (!data || !session) return [];
    const { calendarEvents, calendars, userActions, userIdentities, userValues } = data;
    const componentMap = {
      calendar: (
        <Card sx={{ height: "100%", maxHeight: "100%" }}>
          <Collapse in={editing}>
            <CardHeader
              title={<CardTitle title="Calendar" />}
              style={{ padding: 0 }}
              action={
                <span className={`drag-anchor${!editing ? " hidden" : ""}`}>
                  <IconButton>
                    <DragIndicatorIcon />
                  </IconButton>
                </span>
              }
            />
          </Collapse>
          <CardContent style={{ paddingTop: "0.25rem", height: "100%", maxHeight: "100%" }}>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <CalendarViewer
                data={{ calendarEvents, calendars }}
                loading={loading}
                session={session}
              />
            )}
          </CardContent>
        </Card>
      ),
      actions: (
        <Card sx={{ height: "100%" }}>
          <Collapse in={editing}>
            <CardHeader
              title={<CardTitle title="Actions" />}
              style={{ padding: 0 }}
              action={
                <span className={`drag-anchor${!editing ? " hidden" : ""}`}>
                  <IconButton>
                    <DragIndicatorIcon />
                  </IconButton>
                </span>
              }
            />
          </Collapse>
          <CardContent style={{ paddingTop: "0.25rem", height: "100%", maxHeight: "100%" }}>
            {(!!userActions.length && <ActionBox userActions={userActions} />) || (
              <Typography component="p" textAlign="center">
                No actions yet.
              </Typography>
            )}
          </CardContent>
        </Card>
      ),
      identities: (
        <Card sx={{ height: "100%" }}>
          <Collapse in={editing}>
            <CardHeader
              title={<CardTitle title="Identities" />}
              style={{ padding: 0 }}
              action={
                <span className={`drag-anchor${!editing ? " hidden" : ""}`}>
                  <IconButton>
                    <DragIndicatorIcon />
                  </IconButton>
                </span>
              }
            />
          </Collapse>
          <CardContent style={{ paddingTop: "0.25rem", height: "100%", maxHeight: "100%" }}>
            {(!!userIdentities.length && <IdentityTable userIdentities={userIdentities} />) || (
              <Typography component="p" textAlign="center">
                No identities yet.
              </Typography>
            )}
            <Box textAlign="center" marginTop="1rem">
              <Link href="/identities" passHref>
                <IconButton
                  component={"a"}
                  color="info"
                  style={{ marginLeft: 3 }}
                  title="Explore identities"
                >
                  <SearchIcon />
                </IconButton>
              </Link>
            </Box>
          </CardContent>
        </Card>
      ),
      values: (
        <Card sx={{ height: "100%" }}>
          <Collapse in={editing}>
            <CardHeader
              title={<CardTitle title="Values" />}
              style={{ padding: 0 }}
              action={
                <span className={`drag-anchor${!editing ? " hidden" : ""}`}>
                  <IconButton>
                    <DragIndicatorIcon />
                  </IconButton>
                </span>
              }
            />
          </Collapse>
          <CardContent style={{ paddingTop: "0.25rem", height: "100%", maxHeight: "100%" }}>
            {(!!userValues.length &&
              userValues.map((userValue, index) => (
                <p key={index}>
                  <Link href={`/userValues/${userValue.value.slug}`}>
                    <a>{userValue.value.name}</a>
                  </Link>
                </p>
              ))) || (
              <Typography component="p" textAlign="center">
                No values yet.
              </Typography>
            )}
            <Box textAlign="center" marginTop="1rem">
              <Link href="/values" passHref>
                <IconButton
                  component={"a"}
                  color="info"
                  style={{ marginLeft: 3 }}
                  title="Explore values"
                >
                  <SearchIcon />
                </IconButton>
              </Link>
            </Box>
          </CardContent>
        </Card>
      ),
    };
    return layouts.xs.map((component: DashboardComponent) => {
      return (
        <div key={component.i} className={`${editing ? "editing" : "not-editing"}`}>
          {componentMap[component.i]}
        </div>
      );
    });
  }, [layouts, editing, data, loading, session]);
  if (!session || !data) {
    console.error(error);
    return null;
  }
  return (
    <div>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ xl: 1200, lg: 1200, md: 996, sm: 768, xs: 480 }} // TODO
        cols={{ lg: 12, md: 10, sm: 6, xs: 2 }}
        draggableHandle="span.drag-anchor"
        onLayoutChange={(layout) => {
          console.log("Save the layout!!!", layout);
        }}
      >
        {children}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
