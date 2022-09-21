import { ApolloClient, from, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { scalarTypePolicies } from "@web/generated/graphql/scalarTypePolicies";
import { APOLLO_STATE_PROP_NAME, errorLink } from "@web/lib/apollo/common";
import { PageProps } from "@web/types/page";
import DebounceLink from "apollo-link-debounce";
import { createUploadLink } from "apollo-upload-client";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import { useMemo } from "react";

// This code runs once on the server and once on the client.
const ssrMode = typeof window === "undefined";

if (!process.env.NEXT_PUBLIC_BASE_URL) throw new Error("NEXT_PUBLIC_BASE_URL is not defined");

// https://github.com/helfer/apollo-link-debounce
const debounceLink = new DebounceLink(500);

const enhancedFetch = (...args: Parameters<typeof fetch>) => {
  return fetch(...args);
};

// https://github.com/jaydenseric/apollo-upload-client#function-createuploadlink
const httpLink = createUploadLink({
  uri: "/api/graphql",
  fetch: enhancedFetch,
  // https://www.apollographql.com/docs/react/networking/authentication/#cookie
  credentials: "same-origin",
});

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

export function initializeApolloForClient(initialState: NormalizedCacheObject | null = null) {
  // Prepare an Apollo Client instance for the browser.
  const _apolloClient =
    apolloClient ??
    new ApolloClient({
      // https://www.apollographql.com/docs/react/api/link/introduction/#additive-composition
      link: from([errorLink, debounceLink, httpLink]),
      // TODO: https://www.apollographql.com/docs/apollo-server/performance/cache-backends/#configuring-external-caching
      cache: new InMemoryCache({ typePolicies: scalarTypePolicies }),
      ssrMode,
    });

  // If the page has data-fetching methods that use Apollo (server-side queries),
  // hydrate the initial cache state for the browser here.
  if (initialState) {
    // Get the existing cache (loaded during client-side data fetching).
    const existingCache = _apolloClient.extract();
    // Merge the existing cache into data passed from getStaticProps/getServerSideProps.
    const data = merge(initialState, existingCache, {
      // Combine arrays using object equality (like in sets).
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    });
    // Restore the cache with the merged data.
    _apolloClient.cache.restore(data);
  }

  // For SSG and SSR, always create a new Apollo Client.
  if (typeof window === "undefined") return _apolloClient;

  // On the client side, create the Apollo Client only once.
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(pageProps: PageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApolloForClient(state), [state]);
  return store;
}
