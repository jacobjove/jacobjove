/* Do not edit this file. It was generated programmatically. */

import { CalendarEvent } from "@/graphql/generated/types/calendarEvent.type";
import { gql } from "@apollo/client";

export const calendarEventFragment = gql`
  fragment CalendarEventFragment on CalendarEvent {
    __typename
    id
    userId
    calendarId
    remoteId
    scheduleId
    habitId
    taskId
    title
    start
    end
    allDay
    notes
    canceled
    createdAt
    updatedAt
    archivedAt
  }
`;

export type CalendarEventFragment = Pick<
  CalendarEvent,
  | "__typename"
  | "id"
  | "createdAt"
  | "updatedAt"
  | "archivedAt"
  | "userId"
  | "calendarId"
  | "remoteId"
  | "scheduleId"
  | "habitId"
  | "taskId"
  | "title"
  | "start"
  | "end"
  | "allDay"
  | "notes"
  | "canceled"
>;
