import CalendarViewer, {
  fragment as calendarViewerFragment,
} from "@/components/calendar/CalendarViewer";
import { CalendarData } from "@/components/calendar/views/props";
import Layout from "@/components/Layout";
import { GET_CALENDAR_EVENTS } from "@/graphql/queries";
import { addApolloState, initializeApollo } from "@/lib/apollo/apolloClient";
import { gql, useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
// import { useContext } from "react";
// import DateContext from "@/components/DateContext";

interface CalendarPageProps {
  dateISO: string;
  session: Session;
}

const QUERY = gql`
  query CalendarPage($userId: Int!, $date: DateTime!) {
    ...CalendarViewer
  }
  ${calendarViewerFragment}
`;

const CalendarPage: NextPage<CalendarPageProps> = ({ dateISO }: CalendarPageProps) => {
  const { data: session } = useSession();
  const { loading, error, data } = useQuery<CalendarData>(QUERY, {
    variables: {
      userId: session?.user?.id,
      date: dateISO,
    },
  });
  if (!session || !data) return null; // TODO
  return (
    <Layout>
      <NextSeo
        title={"Calendar"}
        canonical={"/app/calendar"}
        description={"Be your best self."}
        noindex
        nofollow
      />
      <Box display="flex" justifyContent="center" height={"100%"} maxHeight={"100%"}>
        <Box width="100%" maxWidth={"50rem"} height={"100%"} maxHeight={"100%"}>
          <Card sx={{ height: "100%" }}>
            <Box sx={{ padding: "0.2rem 0.2rem 0.5rem", height: "100%" }}>
              <CalendarViewer data={data} loading={loading} error={error} includeDateSelector />
            </Box>
          </Card>
        </Box>
      </Box>
    </Layout>
  );
};
export default CalendarPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();
  const session = await getSession({ req: context.req });
  if (!session?.user?.id) {
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=/app/calendar`,
        permanent: false,
      },
    };
  }
  const props: CalendarPageProps = {
    dateISO: new Date().toISOString(),
    session,
  };
  await apolloClient
    .query({
      query: GET_CALENDAR_EVENTS,
      variables: {
        userId: session.user.id,
        date: new Date().toISOString(),
      },
    })
    .catch((e) => {
      if (e.networkError?.result?.errors) {
        e.networkError.result.errors.forEach(
          (error: {
            message: string;
            extensions: { code: string; exception: { stacktrace: string[] } };
          }) => {
            console.error(error.message);
            console.log(error.extensions.exception.stacktrace.join("\n"), { depth: null });
          }
        );
      } else {
        console.error(e);
      }
    });
  return addApolloState(apolloClient, { props });
};
