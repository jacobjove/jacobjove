import { calendarEventFragment, calendarFragment } from "@/graphql/fragments";
import { gql } from "@apollo/client";

export const GET_CALENDARS = gql`
  query GetCalendars($userId: String!) {
    calendars(where: { userId: { equals: $userId } }) {
      ...CalendarEventFragment
    }
  }
  ${calendarFragment}
`;

export const GET_CALENDAR_EVENTS = gql`
  query GetCalendarEvents($userId: String!) {
    calendarEvents(where: { calendar: { is: { userId: { equals: $userId } } } }) {
      ...CalendarEventFragment
    }
  }
  ${calendarEventFragment}
`;
