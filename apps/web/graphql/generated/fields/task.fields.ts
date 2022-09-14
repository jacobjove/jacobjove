/* Do not edit this file. It was generated programmatically. */

import { Field } from "@web/graphql/schema/definition";
import { TaskFragment } from "@web/graphql/generated/fragments/task.fragment";

type FieldKey = Exclude<
  keyof TaskFragment,
  "id" | "_id" | "createdAt" | "updatedAt" | "__typename"
>;

const fields: Record<FieldKey, Field> = {
  title: {
    label: "title",
    type: "String",
    required: true,
    widget: {},
  },
  description: {
    label: "description",
    type: "String",
    required: false,
    widget: { multiline: true, fullWidth: true },
  },
  plannedStartDate: {
    label: "plannedStartDate",
    type: "DateTime",
    required: false,
    widget: {},
  },
  dueDate: {
    label: "dueDate",
    type: "DateTime",
    required: false,
    widget: {},
  },
  userId: {
    label: "userId",
    type: "ID",
    required: true,
    widget: {},
  },
  parentId: {
    label: "parentId",
    type: "ID",
    required: false,
    widget: {},
  },
  habitId: {
    label: "habitId",
    type: "ID",
    required: false,
    widget: {},
  },
  expectedDuration: {
    label: "expectedDuration",
    type: "Int",
    required: false,
    widget: {},
  },
  rank: {
    label: "rank",
    type: "Int",
    required: true,
    widget: {},
  },
  completedAt: {
    label: "completedAt",
    type: "DateTime",
    required: false,
    widget: {},
  },
  archivedAt: {
    label: "Archived at",
    type: "DateTime",
    required: false,
  },
};

export default fields;
