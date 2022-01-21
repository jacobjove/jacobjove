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
  mutation UpdateTask($taskId: Int!, $data: TaskUpdateInput!) {
    updateTask(data: $data, where: { id: $taskId }) {
      ...TaskFragment
    }
  }
  ${taskFragment}
`;

export const UPDATE_ACTION = gql`
  mutation UpdateAction($where: ActionWhereUniqueInput!, $data: ActionUpdateInput!) {
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
