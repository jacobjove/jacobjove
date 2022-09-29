import Definition, { Field, OPTIONAL_STRING, REQUIRED_STRING } from "@common/definition";

const taskFields = [
  "title",
  "description",
  "plannedStartDate",
  "dueDate",
  "userId",
  "parentId",
  "habitId",
  "rank",
  "expectedDuration",
  "completedAt",
] as const;

type TaskFields = typeof taskFields[number];

const fields: Record<TaskFields, Field> = {
  title: REQUIRED_STRING,
  description: { ...OPTIONAL_STRING, widget: { multiline: true, fullWidth: true } },
  plannedStartDate: { required: false, type: "DateTime" },
  dueDate: { required: false, type: "DateTime" },
  userId: { required: true, type: "ID", ref: "User" },
  parentId: { required: false, type: "ID", ref: "Task" },
  habitId: { required: false, type: "ID", ref: "Habit" },
  expectedDuration: { required: false, type: "Int", default: 30 },
  rank: { required: true, type: "Int", initialize: true },
  completedAt: { required: false, type: "DateTime" },
};

const TASK_DEFINITION: Definition<TaskFields> = {
  name: "task",
  fields,
};

export default TASK_DEFINITION;
