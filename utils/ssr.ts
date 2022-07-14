import { USE_FIREBASE } from "@/config";
import { addApolloState, initializeApollo } from "@/lib/apollo";
import { printError } from "@/utils/apollo/error-handling";
import { QueryOptions } from "@apollo/client";
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import { FC } from "react";

interface BuildServerSidePropsOptions {
  unauthedRedirectDestination?: string;
  query?: QueryOptions;
}

export const withAuth = () => (component: FC) => {
  return USE_FIREBASE ? withAuthUser()(component) : component;
};

const EXECUTE_SERVER_SIDE_QUERIES = false;

export const buildGetServerSidePropsFunc = ({
  unauthedRedirectDestination,
  query,
}: BuildServerSidePropsOptions | undefined = {}) => {
  if (USE_FIREBASE) {
    return withAuthUserTokenSSR(
      unauthedRedirectDestination
        ? {
            whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
            authPageURL: unauthedRedirectDestination,
          }
        : {}
    )(async (ctx) => {
      const { req, AuthUser: authUser } = ctx;
      console.log(">>> Building server-side props for", req.url);
      const apolloClient = query ? initializeApollo() : null;
      if (EXECUTE_SERVER_SIDE_QUERIES && query && apolloClient) {
        if (unauthedRedirectDestination && !authUser.id) {
          throw new Error(">>> Should have been redirected!!!!!");
        }
        console.log(">>> Attempting server-side query...");
        const queryOptions = {
          ...query,
          context: {
            token: {
              uid: authUser.id,
            },
          },
        };
        await apolloClient
          .query(queryOptions)
          .then((result) => {
            console.log(">>> SSR query result:", result);
          })
          .catch(printError);
      }
      const props = {};
      return apolloClient ? addApolloState(apolloClient, { props }) : { props };
    });
  } else {
    throw new Error("Not implemented");
    // const { token } = await getAuth(context);
    // if (!token) {
    //   return {
    //     redirect: {
    //       destination: unauthedRedirectDestination,
    //       permanent: false,
    //     },
    //   };
    // }
    // return _buildServerSideProps({ context, query });
  }
};
