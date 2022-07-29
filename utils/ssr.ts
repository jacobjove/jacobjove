import { addApolloState, initializeApollo } from "@/lib/apollo";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { printError } from "@/utils/apollo/error-handling";
import { QueryOptions } from "@apollo/client";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import { unstable_getServerSession } from "next-auth/next";
import nookies from "nookies";

interface BuildServerSidePropsOptions {
  unauthedRedirectDestination?: string;
  readCookies?: boolean;
  query?: QueryOptions;
  props?: (
    context: GetServerSidePropsContext,
    session: Session | null
  ) => Promise<{ [key: string]: unknown }>;
}

const EXECUTE_SERVER_SIDE_QUERIES = false;

export const buildGetServerSidePropsFunc = ({
  unauthedRedirectDestination,
  query,
  props: getProps,
}: BuildServerSidePropsOptions | undefined = {}) => {
  return async (context: GetServerSidePropsContext) => {
    const { req } = context;
    console.log(">>> SSRing for", req.url);
    const session = await unstable_getServerSession(context.req, context.res, authOptions);
    if (!session && unauthedRedirectDestination) {
      return {
        redirect: {
          destination: unauthedRedirectDestination,
          permanent: false,
        },
      };
    }
    const props = getProps ? await getProps(context, session) : ({} as { [key: string]: unknown });
    props.session = session;
    const cookies = nookies.get(context);
    props.cookies = cookies;
    const apolloClient = query ? initializeApollo() : null;
    if (EXECUTE_SERVER_SIDE_QUERIES && query && apolloClient) {
      if (unauthedRedirectDestination && !session) {
        throw new Error(">>> Should have been redirected!!!!!");
      }
      console.log(">>> Attempting server-side query...");
      const queryOptions = {
        ...query,
        context: { session },
      };
      await apolloClient
        .query(queryOptions)
        .then((result) => {
          console.log(">>> SSR query result:", result);
        })
        .catch(printError);
    }
    return apolloClient ? addApolloState(apolloClient, { props }) : { props };
  };
};
