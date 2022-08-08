import introspectionResult from "@/graphql/schema.gql.json";
import { ApolloClient, from, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import DebounceLink from "apollo-link-debounce";
import { withScalars } from "apollo-link-scalars";
import merge from "deepmerge";
import { buildClientSchema, IntrospectionQuery } from "graphql";
import { DateTimeResolver } from "graphql-scalars";
import isEqual from "lodash/isEqual";
import { AppProps } from "next/app";
import { useMemo } from "react";

// const schema = buildClientSchema(introspectionResult);
const clientSchema = buildClientSchema(introspectionResult as unknown as IntrospectionQuery);

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
  uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`, // Server URL (must be absolute)
  credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
  fetchOptions: {
    credentials: "same-origin",
  },
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

export function initializeApollo(initialState = null) {
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

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: AppProps["pageProps"]
) {
  // console.log(typeof pageProps, pageProps);
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
}

export function useApollo(pageProps: AppProps["pageProps"]) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
