import { gql } from "@apollo/client";
import { userFragment } from "@web/generated/graphql/fragments/user.fragment";

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    currentUser {
      ...UserFragment
    }
  }
  ${userFragment}
`;
