import { accountFragment, calendarFragment, userFragment } from "@/graphql/fragments";
import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
  query GetUserById($id: String!) {
    user(where: { id: $id }) {
      ...UserFragment
    }
  }
  ${userFragment}
`;

export const GET_USER = gql`
  query GetUser($where: UserWhereUniqueInput!) {
    user(where: $where) {
      ...UserFragment
    }
  }
  ${userFragment}
`;

export const GET_CALENDARS = gql`
  query GetCalendars {
    calendars {
      ...CalendarFragment
    }
  }
  ${calendarFragment}
`;

export const GET_ACCOUNTS = gql`
  query GetAccounts {
    accounts {
      ...AccountFragment
    }
  }
  ${accountFragment}
`;

// export const GET_CALENDAR_EVENTS = gql`
//   query GetCalendarEvents {
//     calendarEvents {
//       ...CalendarEventFragment
//     }
//   }
//   ${calendarEventFragment}
// `;
