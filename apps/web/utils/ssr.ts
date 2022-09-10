import { QueryOptions } from "@apollo/client";
import { addApolloState, initializeApollo } from "@web/lib/apollo";
import { authOptions } from "@web/pages/api/auth/[...nextauth]";
import { printError } from "@web/utils/apollo/error-handling";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import { unstable_getServerSession } from "next-auth/next";
import nookies from "nookies";

type GetServerSidePropsResult = ReturnType<GetServerSideProps>;

interface BuildServerSidePropsOptions {
  unauthedRedirectDestination?: string;
  readCookies?: boolean;
  query?: QueryOptions;
  props?: (
    context: GetServerSidePropsContext,
    session: Session | null
  ) => Promise<Record<string, unknown>>;
}

const EXECUTE_SERVER_SIDE_QUERIES = false;

export const buildGetServerSidePropsFunc = ({
  unauthedRedirectDestination,
  query,
  props: getProps,
}: BuildServerSidePropsOptions): GetServerSideProps => {
  return async (context: GetServerSidePropsContext) => {
    // const { req } = context;
    const session = await unstable_getServerSession(context.req, context.res, authOptions);
    if (!session && unauthedRedirectDestination) {
      return {
        redirect: {
          destination: unauthedRedirectDestination,
          permanent: false,
        },
      };
    }
    const propsPromise = getProps ? getProps(context, session) : Promise.resolve({});
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
    const result = {
      props: {
        ...(await propsPromise),
        session,
        cookies: nookies.get(context),
      },
    };
    return (
      apolloClient ? addApolloState(apolloClient, result) : result
    ) as GetServerSidePropsResult;
  };
};
