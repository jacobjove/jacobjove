/* Do not edit this file. It was generated programmatically. */
// import { Task } from "@/graphql/generated/types/task.type";
import { UserFragment } from "@/graphql/generated/fragments/user.fragment";
import { TaskCreationInput } from "@/graphql/generated/inputs/task.inputs";
import { initializeTaskRank } from "@/graphql/schema/initializers";
import { ID } from "@/graphql/schema/types";
import { Payload } from "@/utils/data";

export type TaskData = Partial<TaskCreationInput> & { id?: ID };
// export type TaskData = InputData<Task>;
// export type InitialTaskData = InitialData<Task, "rank" | "userId">;

export function initializeTaskData(
  data: Partial<TaskData>,
  user?: UserFragment | null | undefined
): Partial<TaskData> {
  if (!user) return data;
  return {
    userId: user.id,
    title: "",
    rank: initializeTaskRank(user),
    ...Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined)), // TODO: make this unnecessary
  };
}

export function taskDataReducer(state: TaskData, payload: Payload<TaskData>) {
  if (payload.field === "init") return initializeTaskData(payload.value as Partial<TaskData>);
  return { ...state, [payload.field]: payload.value };
}
