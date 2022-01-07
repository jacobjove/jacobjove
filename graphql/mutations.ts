import { actionCompletionFragment, calendarEventFragment } from "@/graphql/fragments";
import { gql } from "@apollo/client";

export const CREATE_ACTION_COMPLETION = gql`
  mutation CreateActionCompletion($data: ActionCompletionCreateInput!) {
    createActionCompletion(data: $data) {
      ...ActionCompletionFragment
    }
  }
  ${actionCompletionFragment}
`;

export const UPDATE_ACTION_COMPLETION = gql`
  mutation UpdateActionCompletion(
    $data: ActionCompletionUpdateInput!
    $where: ActionCompletionWhereUniqueInput!
  ) {
    updateActionCompletion(data: $data, where: $where) {
      ...ActionCompletionFragment
    }
  }
  ${actionCompletionFragment}
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
