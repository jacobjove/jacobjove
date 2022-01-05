import Dashboard, {
  DashboardData,
  DashboardLayouts,
  fragment as dashboardFragment,
} from "@/components/dashboard/Dashboard";
import Layout from "@/components/Layout";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql, useQuery } from "@apollo/client";
import DoneIcon from "@mui/icons-material/Done";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NativeSelect from "@mui/material/NativeSelect";
import Select from "@mui/material/Select";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useState } from "react";

interface DashboardPageProps {
  session: Session;
  layouts: DashboardLayouts;
}

const QUERY = gql`
  query DashboardPage($userId: String!) {
    ...Dashboard
  }
  ${dashboardFragment}
`;

const DashboardPage: NextPage<DashboardPageProps> = (props: DashboardPageProps) => {
  const { layouts: initialLayouts } = props;
  const { data: session } = useSession();
  const [layouts, setLayouts] = useState(initialLayouts);
  const [editing, setEditing] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { loading, error, data } = useQuery<DashboardData>(QUERY, {
    variables: {
      userId: session?.user?.id,
    },
  });
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
            <Select
              value="Default Dashboard"
              SelectDisplayProps={{ style: { paddingTop: "0.4rem", paddingBottom: "0.4rem" } }}
            >
              <MenuItem value="Default Dashboard">Default Dashboard</MenuItem>
            </Select>
          )}
        </Box>
        {editing ? (
          <IconButton
            onClick={() => {
              setEditing(false);
            }}
          >
            <DoneIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              setEditing(true);
            }}
          >
            <ModeEditIcon />
          </IconButton>
        )}
        <IconButton
          id="menu-button-x"
          onClick={(e) => {
            console.log(
              "Open dropdown for renaming, sharing, creating new dashboard, viewing all dashboards, etc."
            );
            setMenuAnchorEl(e.currentTarget);
            setMenuOpen(true);
          }}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          anchorEl={menuAnchorEl}
          open={menuOpen}
          onClose={() => {
            setMenuOpen(false);
          }}
          MenuListProps={{
            "aria-labelledby": "menu-button-x",
          }}
          keepMounted
        >
          <Link href="/app/routines">
            <a>
              <MenuItem>Routines</MenuItem>
            </a>
          </Link>
          <MenuItem
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Close
          </MenuItem>
        </Menu>
      </Box>
      <Dashboard
        data={data}
        loading={loading}
        error={error}
        layouts={layouts}
        setLayouts={setLayouts}
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
  const props: DashboardPageProps = {
    layouts: {
      xs: [
        { i: "calendar", x: 0, y: 0, w: 4, h: 3, resizeHandles: ["se", "sw"] },
        { i: "actions", x: 0, y: 1, w: 4, h: 1, resizeHandles: ["se", "sw"] },
        { i: "identities", x: 0, y: 2, w: 4, h: 1, resizeHandles: ["se", "sw"] },
        { i: "values", x: 0, y: 3, w: 4, h: 1, resizeHandles: ["se", "sw"] },
        { i: "topics", x: 0, y: 4, w: 4, h: 1, resizeHandles: ["se", "sw"] },
      ],
      sm: [
        { i: "calendar", x: 0, y: 0, w: 4, h: 4, resizeHandles: ["se", "sw"] },
        { i: "actions", x: 6, y: 3, w: 2, h: 2, resizeHandles: ["se", "sw"] },
        { i: "identities", x: 9, y: 4, w: 2, h: 2, resizeHandles: ["se", "sw"] },
        { i: "values", x: 6, y: 5, w: 2, h: 2, resizeHandles: ["se", "sw"] },
        { i: "topics", x: 9, y: 6, w: 2, h: 2, resizeHandles: ["se", "sw"] },
      ],
      md: [
        { i: "calendar", x: 0, y: 0, w: 6, h: 4, resizeHandles: ["se", "sw"] },
        { i: "actions", x: 6, y: 0, w: 3, h: 2, resizeHandles: ["se", "sw"] },
        { i: "identities", x: 9, y: 0, w: 3, h: 2, resizeHandles: ["se", "sw"] },
        { i: "values", x: 6, y: 2, w: 3, h: 2, resizeHandles: ["se", "sw"] },
        { i: "topics", x: 9, y: 2, w: 3, h: 2, resizeHandles: ["se", "sw"] },
      ],
      lg: [
        { i: "calendar", x: 1, y: 0, w: 8, h: 4, resizeHandles: ["se", "sw"] },
        { i: "actions", x: 9, y: 0, w: 4, h: 2, resizeHandles: ["se", "sw"] },
        { i: "identities", x: 13, y: 2, w: 4, h: 2, resizeHandles: ["se", "sw"] },
        { i: "values", x: 9, y: 3, w: 4, h: 2, resizeHandles: ["se", "sw"] },
        { i: "topics", x: 13, y: 4, w: 4, h: 2, resizeHandles: ["se", "sw"] },
      ],
      // xl: [
      //   { i: "calendar", x: 1, y: 1, w: 6, h: 4, resizeHandles: ["se", "sw"] },
      //   { i: "actions", x: 7, y: 1, w: 4, h: 2, resizeHandles: ["se", "sw"] },
      //   { i: "identities", x: 7, y: 3, w: 4, h: 2, resizeHandles: ["se", "sw"] },
      //   { i: "values", x: 7, y: 7, w: 4, h: 1, resizeHandles: ["se", "sw"] },
      // ],
    },
    session,
  };
  await apolloClient.query({
    query: QUERY,
    variables: {
      userId: session?.user?.id,
    },
  });
  return addApolloState(apolloClient, { props });
};
