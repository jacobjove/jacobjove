/* Do not edit this file. It was generated programmatically. */

import { Identity } from "@/graphql/generated/types/identity.type";
import { gql } from "@apollo/client";

export const identityFragment = gql`
  fragment IdentityFragment on Identity {
    __typename
    id
    userId
    name
    description
    createdAt
    updatedAt
    archivedAt
  }
`;

export type IdentityFragment = Pick<
  Identity,
  "__typename" | "id" | "createdAt" | "updatedAt" | "archivedAt" | "userId" | "name" | "description"
>;
