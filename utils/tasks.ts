import { Task } from "@/graphql/schema/generated/models/task.model";
import { InitialData, InputData } from "@/utils/data";

export type TaskData = InputData<Task>;
export type InitialTaskData = InitialData<Task, "rank" | "userId">;

export const initializeTaskData = (taskData: InitialTaskData): TaskData => {
  // console.error(">>>", taskData);
  return {
    title: "",
    description: "",
    plannedStartDate: null,
    dueDate: null,
    completedAt: null,
    archivedAt: null,
    parentId: null,
    habitId: null,
    ...taskData,
  };
};

export const taskDataReducer = (state: TaskData, payload: { field: string; value: unknown }) => {
  if (payload.field === "init") return initializeTaskData(payload.value as TaskData);
  return { ...state, [payload.field]: payload.value };
};
