import { ApolloClient, from, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { scalarTypePolicies } from "@web/generated/graphql/scalarTypePolicies";
import { schemaPromise } from "@web/graphql/schema";
import { APOLLO_STATE_PROP_NAME, errorLink } from "@web/lib/apollo/common";
import { PageProps } from "@web/types/page";
import { Session } from "next-auth";

const ssrMode = typeof window === "undefined";
if (!ssrMode) throw new Error("SSR utils are not available in the browser.");

export async function initializeApolloForServer(session: Session | null = null) {
  // For SSG and SSR, always create a new Apollo Client.
  return new ApolloClient({
    // https://www.apollographql.com/docs/react/api/link/introduction/#additive-composition
    link: from([
      errorLink,
      new SchemaLink({
        schema: await schemaPromise,
        context: { session },
      }),
    ]),
    // TODO: https://www.apollographql.com/docs/apollo-server/performance/cache-backends/#configuring-external-caching
    cache: new InMemoryCache({ typePolicies: scalarTypePolicies }),
    ssrMode,
  });
}

interface Response {
  props: PageProps;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  response: Response
): Response {
  response.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  return response;
}
