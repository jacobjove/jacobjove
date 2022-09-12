import { ApolloClient, from, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import introspectionResult from "@web/graphql/schema.gql.json";
import DebounceLink from "apollo-link-debounce";
import { withScalars } from "apollo-link-scalars";
import merge from "deepmerge";
import { buildClientSchema, IntrospectionQuery } from "graphql";
import { DateTimeResolver } from "graphql-scalars";
import isEqual from "lodash/isEqual";
import { useMemo } from "react";

if (!process.env.NEXT_PUBLIC_BASE_URL) throw new Error("NEXT_PUBLIC_BASE_URL is not defined");

// const schema = buildClientSchema(introspectionResult);
const clientSchema = buildClientSchema(introspectionResult as unknown as IntrospectionQuery);

// TODO: figure out if types are broken;
// file bug with Next.js related to inconsistent use of pageProps in example:
// https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
interface PageProps {
  props?: Record<string, unknown>;
  __APOLLO_STATE__?: NormalizedCacheObject;
}

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const scalarsLink = withScalars({
  schema: clientSchema,
  typesMap: {
    DateTimeISO: DateTimeResolver,
    // ObjectId: ObjectIdScalar,
  },
});

const debounceLink = new DebounceLink(500);

// TODO: https://github.com/jaydenseric/apollo-upload-client
const terminalLink = new HttpLink({
  // Specify the absolute URL for the GraphQL server.
  uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
  // https://www.apollographql.com/docs/apollo-server/security/cors/
  // credentials: "same-site", // Additional fetch() options like `credentials` or `headers`
  // fetchOptions: {
  //   mode: "no-cors",
  //   // mode: "same-site",
  // },
});
// createUploadLink({
//   uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`, // Server URL (must be absolute)
//   //   credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
//   //   fetchOptions: {
//   //     credentials: "same-origin",
//   //   }
//   fetchOptions: {
//     mode: 'cors',
//   },
//   credentials: 'include',
//   // fetch: enhancedFetch,
// });

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    // https://www.apollographql.com/docs/react/api/link/introduction/#additive-composition
    link: from([scalarsLink, errorLink, debounceLink, terminalLink]),
    // TODO: https://www.apollographql.com/docs/apollo-server/performance/cache-backends/#configuring-external-caching
    cache: new InMemoryCache({
      //   typePolicies: {
      //     Query: {
      //       fields: {
      //         allPosts: concatPagination(),
      //       },
      //     },
      //   },
    }),
  });
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: PageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
}

export function useApollo(pageProps: PageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
