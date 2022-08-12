import { UserFragment } from "@/graphql/generated/fragments/user.fragment";

const MAX_TASK_RANK = 2 ** 31 - 1;
const MIN_TASK_RANK = -MAX_TASK_RANK - 1;

export const initializeTaskRank = (user: UserFragment): number => {
  const incompleteTasks = user.tasks?.filter((task) => !task.completedAt) ?? [];
  const greatestRank = incompleteTasks[incompleteTasks.length - 1]?.rank ?? MIN_TASK_RANK;
  return Math.floor(greatestRank + Math.floor((MAX_TASK_RANK - greatestRank) / 2));
};
