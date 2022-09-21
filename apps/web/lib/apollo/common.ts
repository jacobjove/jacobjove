import { onError } from "@apollo/client/link/error";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

// https://www.apollographql.com/docs/react/api/link/apollo-link-error
export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
