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
import { useState } from "react";
import GridLayout from "react-grid-layout";

interface DashboardPageProps {
  dateISO: string;
  session: Session;
}

interface DashboardPageData {
  calendarEvents: CalendarEvent[];
  userActions: UserAction &
    {
      action: Action;
      schedules: UserActionSchedule[];
    }[];
  userIdentities: (UserIdentity & {
    identity: Identity;
  })[];
  userValues: (UserValue & {
    value: Value;
  })[];
}

const DashboardPage: NextPage<DashboardPageProps> = (props: DashboardPageProps) => {
  const { dateISO } = props;
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
  if (!session || !data) {
    return null;
  }
  console.log(data);
  const { calendarEvents, userActions, userIdentities, userValues } = data;
  const layout = [
    { i: "a", x: 0, y: 0, w: 6, h: 2, static: true },
    { i: "b", x: 6, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 8, y: 3, w: 1, h: 2 },
    { i: "d", x: 10, y: 8, w: 1, h: 2 },
  ];
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
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key="a">
            <Card sx={{ marginY: "1rem" }}>
              <CardHeader title="Calendar" style={{ display: "none" }} />
              <CardContent style={{ paddingTop: "0.25rem" }}>
                <CalendarViewer
                  calendarEvents={calendarEvents}
                  date={date}
                  setDate={setDate}
                  session={session}
                />
              </CardContent>
            </Card>
          </div>
          <div key="b">
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
          </div>
          <div key="c">
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
          </div>
          <div key="d">
            <Card sx={{ marginY: "1rem" }}>
              <CardHeader title="Values" />
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
          </div>
        </GridLayout>
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
