import ActionBox from "@/components/actions/ActionBox";
import CalendarViewer from "@/components/Calendar";
import IdentityTable from "@/components/identities/IdentityTable";
import Layout from "@/components/Layout";
import { GET_DASHBOARD_DATA } from "@/graphql/queries";
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
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { useQuery } from "@apollo/client";
import DoneIcon from "@mui/icons-material/Done";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@mui/material/NativeSelect";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { FC, useMemo, useState } from "react";
import { Layout as LayoutItem, Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface DashboardPageProps {
  dateISO: string;
  session: Session;
  layouts: {
    xs: DashboardComponent[];
    sm?: DashboardComponent[];
    md?: DashboardComponent[];
    lg?: DashboardComponent[];
    xl?: DashboardComponent[];
  };
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

interface DashboardPageData {
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

const DashboardPage: NextPage<DashboardPageProps> = (props: DashboardPageProps) => {
  const { dateISO, layouts } = props;
  const { data: session } = useSession();
  const [date, setDate] = useState(new Date(dateISO));
  const [editing, setEditing] = useState(false);
  const { loading, error, data, fetchMore, networkStatus } = useQuery<DashboardPageData>(
    GET_DASHBOARD_DATA,
    {
      variables: {
        userId: session?.user?.id,
      },
    }
  );
  const isMobile = useMediaQuery("(max-width: 600px)");
  const children = useMemo(() => {
    if (!data || !session) return [];
    const { calendarEvents, userActions, userIdentities, userValues } = data;
    const componentMap = {
      calendar: (
        <Card sx={{ height: "100%", maxHeight: "100%" }}>
          <CardHeader
            title={<CardTitle title="Calendar" />}
            style={{ padding: 0 }}
            action={
              <span className={`drag-anchor${!editing ? " hidden" : ""}`}>
                <IconButton>
                  {/* <MoreVertIcon /> */}
                  <DragIndicatorIcon />
                </IconButton>
              </span>
            }
          />
          <CardContent style={{ paddingTop: "0.25rem", height: "100%", maxHeight: "100%" }}>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <CalendarViewer
                calendarEvents={calendarEvents}
                date={date}
                setDate={setDate}
                session={session}
              />
            )}
          </CardContent>
        </Card>
      ),
      actions: (
        <Card sx={{ height: "100%" }}>
          <CardHeader
            title={<CardTitle title="Actions" />}
            style={{ padding: 0 }}
            action={
              <span className={`drag-anchor${!editing ? " hidden" : ""}`}>
                <IconButton>
                  {/* <MoreVertIcon /> */}
                  <DragIndicatorIcon />
                </IconButton>
              </span>
            }
          />
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
          <CardHeader
            title={<CardTitle title="Identities" />}
            style={{ padding: 0 }}
            action={
              <span className={`drag-anchor${!editing ? " hidden" : ""}`}>
                <IconButton>
                  {/* <MoreVertIcon /> */}
                  <DragIndicatorIcon />
                </IconButton>
              </span>
            }
          />
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
          <CardHeader
            title={<CardTitle title="Values" />}
            style={{ padding: 0 }}
            action={
              <span className={`drag-anchor${!editing ? " hidden" : ""}`}>
                <IconButton>
                  {/* <MoreVertIcon /> */}
                  <DragIndicatorIcon />
                </IconButton>
              </span>
            }
          />
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
    return layouts.xs.map((component) => {
      return (
        <div key={component.i} className={`${editing ? "editing" : "not-editing"}`}>
          {componentMap[component.i]}
        </div>
      );
    });
  }, [layouts, editing, data, loading, session, date]);
  if (!session || !data) {
    console.error(error);
    return null;
  }
  return (
    <Layout>
      <NextSeo
        title={"Dashboard"}
        canonical={"/app/dashboard"}
        description={"Be your best self."}
        noindex
        nofollow
      />
      <Box display="flex" marginTop="0.8rem" paddingX="0.75rem">
        <Box flexGrow={1} paddingX="0.75rem">
          {isMobile ? (
            <NativeSelect
              defaultValue={"Default Dashboard"}
              inputProps={{
                name: "dashboard",
                id: "uncontrolled-dashboard",
              }}
            >
              <option value={"Default Dashboard"}>Default Dashboard</option>
            </NativeSelect>
          ) : (
            <Select variant="standard" value="Default Dashboard">
              <MenuItem value="Default Dashboard">Default Dashboard</MenuItem>
            </Select>
          )}
        </Box>
        {editing ? (
          <Button
            variant="text"
            onClick={() => {
              console.log("setting editing mode false");
              setEditing(false);
            }}
          >
            <DoneIcon />
          </Button>
        ) : (
          <IconButton
            onClick={() => {
              console.log("setting editing mode true");
              setEditing(true);
            }}
          >
            <ModeEditIcon />
          </IconButton>
        )}
        <IconButton
          onClick={() => {
            console.log(
              "Open dropdown for renaming, sharing, creating new dashboard, viewing all dashboards, etc."
            );
          }}
        >
          <MoreHorizIcon />
        </IconButton>
      </Box>
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
    </Layout>
  );
};
export default DashboardPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const session = await getSession({ req: context.req });
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=/app/dashboard`,
        permanent: false,
      },
    };
  }
  const today = new Date();
  const props: DashboardPageProps = {
    dateISO: today.toISOString(),
    layouts: {
      xs: [
        { i: "calendar", x: 1, y: 1, w: 6, h: 3, resizeHandles: ["se", "sw"] },
        { i: "actions", x: 7, y: 1, w: 4, h: 1, resizeHandles: ["se", "sw"] },
        { i: "identities", x: 7, y: 3, w: 2, h: 1, resizeHandles: ["se", "sw"] },
        { i: "values", x: 7, y: 7, w: 2, h: 1, resizeHandles: ["se", "sw"] },
      ],
      sm: [
        { i: "calendar", x: 1, y: 1, w: 6, h: 4, resizeHandles: ["se", "sw"] },
        { i: "actions", x: 7, y: 1, w: 4, h: 1, resizeHandles: ["se", "sw"] },
        { i: "identities", x: 7, y: 3, w: 2, h: 1, resizeHandles: ["se", "sw"] },
        { i: "values", x: 7, y: 7, w: 2, h: 1, resizeHandles: ["se", "sw"] },
      ],
      md: [
        { i: "calendar", x: 1, y: 1, w: 6, h: 4, resizeHandles: ["se", "sw"] },
        { i: "actions", x: 7, y: 1, w: 4, h: 1, resizeHandles: ["se", "sw"] },
        { i: "identities", x: 7, y: 3, w: 4, h: 2, resizeHandles: ["se", "sw"] },
        { i: "values", x: 7, y: 7, w: 4, h: 1, resizeHandles: ["se", "sw"] },
      ],
      lg: [
        { i: "calendar", x: 1, y: 1, w: 6, h: 4, resizeHandles: ["se", "sw"] },
        { i: "actions", x: 7, y: 1, w: 4, h: 1, resizeHandles: ["se", "sw"] },
        { i: "identities", x: 7, y: 3, w: 4, h: 2, resizeHandles: ["se", "sw"] },
        { i: "values", x: 7, y: 7, w: 4, h: 1, resizeHandles: ["se", "sw"] },
      ],
      xl: [
        { i: "calendar", x: 1, y: 1, w: 6, h: 4, resizeHandles: ["se", "sw"] },
        { i: "actions", x: 7, y: 1, w: 4, h: 1, resizeHandles: ["se", "sw"] },
        { i: "identities", x: 7, y: 3, w: 4, h: 2, resizeHandles: ["se", "sw"] },
        { i: "values", x: 7, y: 7, w: 4, h: 1, resizeHandles: ["se", "sw"] },
      ],
    },
    session,
  };
  await apolloClient.query({
    query: GET_DASHBOARD_DATA,
    variables: {
      userId: session?.user?.id,
    },
  });
  return addApolloState(apolloClient, { props });
};
