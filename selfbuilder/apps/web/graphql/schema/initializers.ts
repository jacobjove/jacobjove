import { UserFragment } from "@web/generated/graphql/fragments/user.fragment";
import { MAX_TASK_RANK, MIN_TASK_RANK } from "@web/graphql/schema/constants";

export const initializeTaskRank = (user: UserFragment): number => {
  console.log("initializeTaskRank");
  const incompleteTasks = user.tasks?.filter((task) => !task.completedAt) ?? [];
  const greatestRank = incompleteTasks[incompleteTasks.length - 1]?.rank ?? MIN_TASK_RANK;
  const rank = Math.floor(greatestRank + Math.floor((MAX_TASK_RANK - greatestRank) / 2));
  console.log(`Initializing task rank to ${rank} based on greatest rank:`, greatestRank);
  return rank;
};

export const initializeCalendarEventCalendarId = (user: UserFragment): string => {
  let defaultCalendarId = user.settings.defaultCalendarId;
  if (!defaultCalendarId) {
    if (user.calendars?.length) {
      defaultCalendarId = user.calendars[0].id as string;
    } else {
      // throw new Error("No default calendar id found for user");
    }
  }
  return defaultCalendarId ?? "";
};
