import { UserFragment } from "@/graphql/generated/fragments/user.fragment";
import { MAX_TASK_RANK, MIN_TASK_RANK } from "@/graphql/schema/constants";

export const initializeTaskRank = (user: UserFragment): number => {
  const incompleteTasks = user.tasks?.filter((task) => !task.completedAt) ?? [];
  const greatestRank = incompleteTasks[incompleteTasks.length - 1]?.rank ?? MIN_TASK_RANK;
  return Math.floor(greatestRank + Math.floor((MAX_TASK_RANK - greatestRank) / 2));
};

export const initializeCalendarEventCalendarId = (user: UserFragment): string => {
  let defaultCalendarId = user.settings.defaultCalendarId;
  if (!defaultCalendarId) {
    console.error("No default calendar id found!");
    defaultCalendarId = user.calendars?.[0]?.id ?? "";
  }
  return defaultCalendarId;
};
