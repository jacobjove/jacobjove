import { calendarEventFragment, calendarFragment, userActionFragment } from "@/graphql/fragments";
import { gql } from "@apollo/client";

export const GET_DEFAULT_CALENDAR = gql`
  query GetDefaultCalendar {
    calendar(id: "default") {
      ...calendarFragment
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

export const CREATE_CALENDAR_EVENT = gql`
  mutation CreateCalendarEvent($data: CalendarEventCreateInput!) {
    createCalendarEvent(data: $data) {
      ...CalendarEventFragment
    }
  }
  ${calendarEventFragment}
`;

export const UPDATE_CALENDAR_EVENT = gql`
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

export const DELETE_CALENDAR_EVENT = gql`
  mutation DeleteCalendarEvent($id: Int!) {
    deleteCalendarEvent(where: { id: $id }) {
      id
    }
  }
`;

export const GET_USER_ACTIONS = gql`
  query GetUserActions($userId: String!) {
    userActions(where: { userId: { equals: $userId } }) {
      ...UserActionFragment
    }
  }
  ${userActionFragment}
`;
