import { userFragment } from "@/graphql/fragments";
import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    user {
      ...UserFragment
    }
  }
  ${userFragment}
`;

export const GET_USER = gql`
  query GetUser($id: String!) {
    user(where: { id: $id }) {
      ...UserFragment
    }
  }
  ${userFragment}
`;

// export const GET_CALENDARS = gql`
//   query GetCalendars {
//     calendars {
//       ...CalendarEventFragment
//     }
//   }
//   ${calendarFragment}
// `;

// export const GET_CALENDAR_EVENTS = gql`
//   query GetCalendarEvents {
//     calendarEvents {
//       ...CalendarEventFragment
//     }
//   }
//   ${calendarEventFragment}
// `;
