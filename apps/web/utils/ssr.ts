import { QueryOptions } from "@apollo/client";
import { addApolloState, initializeApolloForServer } from "@web/lib/apollo/ssr";
import { authOptions } from "@web/pages/api/auth/[...nextauth]";
import { PageProps } from "@web/types/page";
import { getCookies } from "cookies-next";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import { unstable_getServerSession } from "next-auth/next";

const ssrMode = typeof window === "undefined";
if (!ssrMode) throw new Error("SSR utils are not available in the browser.");

interface CacheOptions {
  maxAge?: number;
  staleWhileRevalidate?: number;
}

interface BuildServerSidePropsOptions {
  unauthedRedirectDestination?: string;
  readCookies?: boolean;
  cache?: CacheOptions;
  query?: (session: Session | null) => QueryOptions;
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
  query: getQueryOptions,
  cache: cacheOptions,
  props: getProps,
}: BuildServerSidePropsOptions): GetServerSideProps<PageProps> => {
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
    const apolloClient = getQueryOptions ? await initializeApolloForServer(session) : null;
    if (apolloClient && getQueryOptions) {
      const queryOptions = getQueryOptions(session);
      await apolloClient.query(queryOptions).then(console.log);
    }
    const result = {
      props: {
        ...(await propsPromise),
        session,
        cookies: getCookies(context),
      },
    };
    return apolloClient ? addApolloState(apolloClient, result) : result;
  };
};
