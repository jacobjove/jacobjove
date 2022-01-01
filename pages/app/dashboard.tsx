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
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

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
interface DashboardComponent {
  i: "calendar" | "identities" | "actions" | "values";
  x: number;
  y: number;
  w: number;
  h: number;
}

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
  const { loading, error, data, fetchMore, networkStatus } = useQuery<DashboardPageData>(
    GET_DASHBOARD_DATA,
    {
      variables: {
        userId: session?.user?.id,
      },
    }
  );
  const children = useMemo(() => {
    if (!data || !session) return [];
    const { calendarEvents, userActions, userIdentities, userValues } = data;
    const componentMap = {
      calendar: (
        <Card sx={{ marginY: "1rem", height: "100%", maxHeight: "100%", boxSizing: "border-box" }}>
          <CardHeader title="Calendar" style={{ display: "none" }} />
          <CardContent style={{ paddingTop: "0.25rem", height: "100%" }}>
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
        <Card sx={{ marginY: "1rem" }}>
          <CardHeader title="Actions" style={{ display: "none" }} />
          <CardContent>
            {(!!userActions.length && <ActionBox userActions={userActions} />) || (
              <Typography component="p" textAlign="center">
                No actions yet.
              </Typography>
            )}
          </CardContent>
        </Card>
      ),
      identities: (
        <Card sx={{ marginY: "1rem" }}>
          <CardHeader title="Identities" style={{ display: "none" }} />
          <CardContent>
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
        <Card sx={{ marginY: "1rem" }}>
          <CardHeader title="Values" style={{ display: "none" }} />
          <CardContent>
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
      return <div key={component.i}>{componentMap[component.i]}</div>;
    });
  }, [layouts, data, loading, session, date]);
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
      <Container maxWidth={"xl"}>
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ xl: 1200, lg: 1200, md: 996, sm: 768, xs: 480 }} // TODO
          cols={{ lg: 12, md: 10, sm: 6, xs: 2 }}
        >
          {children}
        </ResponsiveGridLayout>
      </Container>
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
        { i: "calendar", x: 1, y: 1, w: 6, h: 3 },
        { i: "actions", x: 7, y: 1, w: 4, h: 1 },
        { i: "identities", x: 7, y: 3, w: 2, h: 1 },
        { i: "values", x: 7, y: 7, w: 2, h: 1 },
      ],
      sm: [
        { i: "calendar", x: 1, y: 1, w: 6, h: 4 },
        { i: "actions", x: 7, y: 1, w: 4, h: 1 },
        { i: "identities", x: 7, y: 3, w: 2, h: 1 },
        { i: "values", x: 7, y: 7, w: 2, h: 1 },
      ],
      md: [
        { i: "calendar", x: 1, y: 1, w: 6, h: 4 },
        { i: "actions", x: 7, y: 1, w: 4, h: 1 },
        { i: "identities", x: 7, y: 3, w: 2, h: 1 },
        { i: "values", x: 7, y: 7, w: 2, h: 1 },
      ],
      lg: [
        { i: "calendar", x: 1, y: 1, w: 6, h: 4 },
        { i: "actions", x: 7, y: 1, w: 4, h: 1 },
        { i: "identities", x: 7, y: 3, w: 2, h: 1 },
        { i: "values", x: 7, y: 7, w: 2, h: 1 },
      ],
      xl: [
        { i: "calendar", x: 1, y: 1, w: 6, h: 4 },
        { i: "actions", x: 7, y: 1, w: 4, h: 1 },
        { i: "identities", x: 7, y: 3, w: 2, h: 1 },
        { i: "values", x: 7, y: 7, w: 2, h: 1 },
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
