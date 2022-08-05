import { Task } from "@/graphql/schema/generated/models/task.model";
import { InputData } from "@/utils/data";

export type TaskData = InputData<Task>;

export type InitialTaskData = Pick<TaskData, "rank"> & Partial<TaskData>;

export const initializeTaskData = (taskData: InitialTaskData): TaskData => {
  return {
    title: "",
    description: "",
    dueDate: null,
    completedAt: null,
    archivedAt: null,
    parentId: null,
    ...taskData,
  };
};

export const taskDataReducer = (state: TaskData, payload: { field: string; value: unknown }) => {
  if (payload.field === "init") return initializeTaskData(payload.value as TaskData);
  return { ...state, [payload.field]: payload.value };
};
