import { actionFragment, calendarEventFragment } from "@/graphql/fragments";
import { gql } from "@apollo/client";

export const CREATE_ACTION = gql`
  mutation CreateAction($data: ActionCreateInput!) {
    createAction(data: $data) {
      ...ActionFragment
    }
  }
  ${actionFragment}
`;

export const UPDATE_ACTION_COMPLETION = gql`
  mutation UpdateAction($data: ActionUpdateInput!, $where: ActionWhereUniqueInput!) {
    updateAction(data: $data, where: $where) {
      ...ActionFragment
    }
  }
  ${actionFragment}
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
