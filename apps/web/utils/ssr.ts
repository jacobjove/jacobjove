import { QueryOptions } from "@apollo/client";
import { addApolloState, initializeApollo } from "@web/lib/apollo";
import { authOptions } from "@web/pages/api/auth/[...nextauth]";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import { unstable_getServerSession } from "next-auth/next";
import nookies from "nookies";

type GetServerSidePropsResult = ReturnType<GetServerSideProps>;

interface CacheOptions {
  maxAge?: number;
  staleWhileRevalidate?: number;
}

interface BuildServerSidePropsOptions {
  unauthedRedirectDestination?: string;
  readCookies?: boolean;
  cache?: CacheOptions;
  query?: QueryOptions;
  props?: (
    context: GetServerSidePropsContext,
    session: Session | null
  ) => Promise<Record<string, unknown>>;
}

const setCachingHeaders = (
  res: GetServerSidePropsContext["res"],
  { maxAge = 10, staleWhileRevalidate = 59 }: CacheOptions
) => {
  // https://nextjs.org/docs/going-to-production#caching
  // Consider the value fresh for <maxAge> seconds.
  // If a request is repeated before the max age is reached, the previously
  // cached value will still be fresh. If the request is repeated before 59 seconds,
  // the cached value will be stale but still render (stale-while-revalidate=59).
  //
  // In the background, a revalidation request will be made to populate the cache
  // with a fresh value. If you refresh the page, you will see the new value.
  res.setHeader(
    "Cache-Control",
    `public, s-maxage=${maxAge}, stale-while-revalidate=${staleWhileRevalidate}`
  );
};

export const buildGetServerSidePropsFunc = ({
  unauthedRedirectDestination,
  query,
  cache: cacheOptions,
  props: getProps,
}: BuildServerSidePropsOptions): GetServerSideProps => {
  return async (context: GetServerSidePropsContext) => {
    const { req, res } = context;
    setCachingHeaders(res, cacheOptions ?? {});
    const session = await unstable_getServerSession(req, res, authOptions);
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
    if (query && apolloClient) {
      if (unauthedRedirectDestination && !session) {
        throw new Error(">>> Should have been redirected!!!!!");
      }
      console.log(">>> Attempting server-side query...");
      const queryOptions = {
        ...query,
        context: { session },
      };
      await apolloClient.query(queryOptions);
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
