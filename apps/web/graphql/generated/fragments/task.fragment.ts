/* Do not edit this file. It was generated programmatically. */

import { gql } from "@apollo/client";
import Task from "@web/generated/types/Task";

export const taskFragment = gql`
  fragment TaskFragment on Task {
    __typename
    id
    title
    description
    plannedStartDate
    dueDate
    userId
    parentId
    habitId
    expectedDuration
    rank
    completedAt
    createdAt
    updatedAt
    archivedAt
  }
`;

export type TaskFragment = Pick<
  Task,
  | "__typename"
  | "id"
  | "createdAt"
  | "updatedAt"
  | "archivedAt"
  | "title"
  | "description"
  | "plannedStartDate"
  | "dueDate"
  | "userId"
  | "parentId"
  | "habitId"
  | "expectedDuration"
  | "rank"
  | "completedAt"
>;
