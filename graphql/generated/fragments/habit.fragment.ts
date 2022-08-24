/* Do not edit this file. It was generated programmatically. */

import { Habit } from "@/graphql/generated/models/habit.model";
import { gql } from "@apollo/client";

export const habitFragment = gql`
  fragment HabitFragment on Habit {
    __typename
    id
    userId
    name
    description
    public
    cron
    defaultDurationInMinutes
    createdAt
    updatedAt
    archivedAt
  }
`;

export type HabitFragment = Pick<
  Habit,
  | "__typename"
  | "id"
  | "createdAt"
  | "updatedAt"
  | "archivedAt"
  | "userId"
  | "name"
  | "description"
  | "public"
  | "cron"
  | "defaultDurationInMinutes"
>;
