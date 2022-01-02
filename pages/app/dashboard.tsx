import Dashboard from "@/components/dashboard/Dashboard";
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
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
import { FC, useState } from "react";
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
  const { layouts } = props;
  const { data: session } = useSession();
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
      <Dashboard
        data={data}
        loading={loading}
        error={error}
        layouts={layouts}
        editing={editing}
        session={session}
      />
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
