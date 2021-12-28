import { gql } from "@apollo/client";

export const GET_CALENDAR_EVENTS = gql`
  query GetCalendarEvents($userId: String!) {
    calendars(where: { userId: { equals: $userId } }) {
      id
      color
      events {
        id
        title
        start
        end
      }
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
