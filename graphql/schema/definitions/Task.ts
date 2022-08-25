import Definition, { Field, OPTIONAL_STRING, REQUIRED_STRING } from "@/graphql/schema/definition";

const taskFields = [
  "title",
  "description",
  "plannedStartDate",
  "dueDate",
  "userId",
  "parentId",
  "habitId",
  "rank",
  "completedAt",
] as const;

type TaskFields = typeof taskFields[number];

const fields: Record<TaskFields, Field> = {
  title: REQUIRED_STRING,
  description: { ...OPTIONAL_STRING, widget: { multiline: true, fullWidth: true } },
  plannedStartDate: { required: false, type: "DateTime" },
  dueDate: { required: false, type: "DateTime" },
  userId: { required: true, type: "ID" },
  parentId: { required: false, type: "ID" },
  habitId: { required: false, type: "ID" },
  rank: { required: true, type: "Int", initialize: true },
  completedAt: { required: false, type: "DateTime" },
};

const TASK_DEFINITION: Definition<TaskFields> = {
  name: "task",
  fields,
};

export default TASK_DEFINITION;
