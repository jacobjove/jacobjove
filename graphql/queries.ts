import {
  calendarEventFragment,
  userActionFragment,
  userIdentityFragment,
  userValueFragment,
} from "@/graphql/fragments";
import { gql } from "@apollo/client";

export const GET_CALENDAR_EVENTS = gql`
  query GetCalendarEvents($userId: String!) {
    calendarEvents(where: { calendar: { is: { userId: { equals: $userId } } } }) {
      ...CalendarEventFragment
    }
  }
  ${calendarEventFragment}
`;

export const SCHEDULE_ACTION = gql`
  mutation ScheduleAction($data: CalendarEventCreateInput!) {
    createCalendarEvent(data: $data) {
      ...CalendarEventFragment
    }
  }
  ${calendarEventFragment}
`;

export const CREATE_CALENDAR_EVENT = gql`
  mutation CreateCalendarEvent($data: CalendarEventCreateInput!) {
    createCalendarEvent(data: $data) {
      ...CalendarEventFragment
    }
  }
  ${calendarEventFragment}
`;

export const DELETE_CALENDAR_EVENT = gql`
  mutation DeleteCalendarEvent($id: Int!) {
    deleteCalendarEvent(where: { id: $id }) {
      id
    }
  }
`;

export const MODIFY_CALENDAR_EVENT = gql`
  mutation UpdateCalendarEvent(
    $data: CalendarEventUpdateInput!
    $where: CalendarEventWhereUniqueInput!
  ) {
    updateCalendarEvent(data: $data, where: $where) {
      ...CalendarEventFragment
    }
  }
  ${calendarEventFragment}
`;

// export const GET_CALENDAR_EVENTS = gql`
//   query GetCalendarEvents($userId: String!, $gt: DateTime!, $lt: DateTime!) {
//     calendars (where: {userId: {equals: $userId}}) {
//       id
//       color
//       events (
//         where: {
//           start: {
//             gt: $gt
//             lt: $lt
//           }
//         }
//       ) {
//         id
//         title
//         start
//         end
//       }
//     }
//   }
// `;

export const GET_USER_ACTIONS = gql`
  query GetUserActions($userId: String!) {
    userActions(where: { userId: { equals: $userId } }) {
      ...UserActionFragment
    }
  }
  ${userActionFragment}
`;

export const GET_DASHBOARD_DATA = gql`
  query GetUserActionsAndCalendarEvents($userId: String!) {
    userActions(where: { userId: { equals: $userId } }) {
      ...UserActionFragment
    }
    calendarEvents(where: { calendar: { is: { userId: { equals: $userId } } } }) {
      ...CalendarEventFragment
    }
    userValues(where: { userId: { equals: $userId } }) {
      ...UserValueFragment
    }
    userIdentities(where: { userId: { equals: $userId } }) {
      ...UserIdentityFragment
    }
  }
  ${userActionFragment}
  ${calendarEventFragment}
  ${userValueFragment}
  ${userIdentityFragment}
`;
