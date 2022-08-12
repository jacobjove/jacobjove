import { Task } from "@/graphql/generated/models/task.model";
import { TaskData } from "@/graphql/generated/reducers/task.reducer";
import { InitialData } from "@/utils/data";

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
