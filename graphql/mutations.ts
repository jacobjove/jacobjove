import { actionFragment, calendarEventFragment, taskFragment } from "@/graphql/fragments";
import { gql } from "@apollo/client";

export const CREATE_ACTION = gql`
  mutation CreateAction($data: ActionCreateInput!) {
    createAction(data: $data) {
      ...ActionFragment
    }
  }
  ${actionFragment}
`;

export const CREATE_TASK = gql`
  mutation CreateTask($data: TaskCreateInput!) {
    createTask(data: $data) {
      ...TaskFragment
    }
  }
  ${taskFragment}
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask($data: TaskUpdateInput!, $where: TaskWhereUniqueInput!) {
    updateTask(data: $data, where: $where) {
      ...TaskFragment
    }
  }
  ${taskFragment}
`;

export const UPDATE_ACTION = gql`
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
