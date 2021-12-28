import { gql } from "@apollo/client";

export const GET_CALENDAR_EVENTS = gql`
  query GetCalendarEvents($userId: String!) {
    calendarEvents(where: { calendar: { is: { userId: { equals: $userId } } } }) {
      id
      scheduleId
      calendarId
      title
      start
      end
    }
  }
`;

export const CREATE_CALENDAR_EVENT = gql`
  mutation CreateCalendarEvent($data: CalendarEventCreateInput!) {
    createCalendarEvent(data: $data) {
      id
      scheduleId
      calendarId
      title
      start
      end
    }
  }
`;

export const MODIFY_CALENDAR_EVENT = gql`
  mutation UpdateCalendarEvent(
    $data: CalendarEventUpdateInput!
    $where: CalendarEventWhereUniqueInput!
  ) {
    updateCalendarEvent(data: $data, where: $where) {
      id
      scheduleId
      calendarId
      title
      start
      end
    }
  }
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
