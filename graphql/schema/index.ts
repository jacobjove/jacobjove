/* eslint-disable */

import * as generatedSchemaExports from "@/prisma/generated";
import {
  Act as _Act,
  Action as _Action,
  ActionSchedule as _ActionSchedule,
  ActionScheduleTemplate as _ActionScheduleTemplate,
  // ActionTheme as _ActionTheme,
  Belief as _Belief,
  Calendar as _Calendar,
  CalendarEvent as _CalendarEvent,
  Dashboard as _Dashboard,
  Habit as _Habit,
  Identification as _Identification,
  Identity as _Identity,
  Note as _Note,
  Notebook as _Notebook,
  RoutineHabit as _RoutineHabit,
  ScheduleTemplate as _ScheduleTemplate,
  Task as _Task,
  User as _User,
  UserBelief as _UserBelief,
  UserValue as _UserValue,
  Value as _Value,
} from "@/prisma/generated";
import { NonEmptyArray } from "type-graphql";
import { ActionCompletionToggleResolver } from "./resolvers/ActionCompletionToggleResolver";
import { HabitAdoptionToggleResolver } from "./resolvers/HabitAdoptionToggleResolver";
import { IdentificationToggleResolver } from "./resolvers/IdentificationToggleResolver";
import { UserBeliefToggleResolver } from "./resolvers/UserBeliefToggleResolver";
import { UserValueToggleResolver } from "./resolvers/UserValueToggleResolver";

const { resolvers: generatedResolvers, ...generatedSchema } = generatedSchemaExports;

export const resolvers = [
  ...generatedResolvers,
  IdentificationToggleResolver,
  HabitAdoptionToggleResolver,
  ActionCompletionToggleResolver,
  UserValueToggleResolver,
  UserBeliefToggleResolver,
] as unknown as NonEmptyArray<Function>;

type OmitCount<T> = Pick<T, Exclude<keyof T, "_count">>;
type FromPrisma<T> = OmitCount<T> & { __typename?: string };
type FromPrismaWithOmission<T, K extends keyof T> = Pick<
  FromPrisma<T>,
  Exclude<keyof FromPrisma<T>, K>
>;

export type Act = FromPrisma<_Act>;
export type Habit = FromPrismaWithOmission<_Habit, "act" | "actions"> & {
  act: Act;
  schedules: ActionSchedule[];
  // themes: ActionTheme[];
  actions: Action[];
  routineHabits: RoutineHabit[];
};
export type Task = FromPrismaWithOmission<
  _Task,
  "dueDate" | "completedAt" | "subtasks" | "userId"
> & {
  dueDate?: string | null;
  completedAt?: string | null;
  subtasks?: Task[];
};
export type Action = FromPrismaWithOmission<_Action, "habit" | "start" | "end"> & {
  start: string;
  end: string;
  archivedAt?: string;
};
export type ActionSchedule = FromPrismaWithOmission<_ActionSchedule, "archivedAt"> & {
  archivedAt?: string;
};
export type ActionScheduleTemplate = FromPrisma<_ActionScheduleTemplate>;
export type ScheduleTemplate = FromPrisma<_ScheduleTemplate>;
export type Identity = FromPrisma<_Identity>;
export type Value = FromPrisma<_Value>;
export type Belief = FromPrisma<_Belief>;
export type RoutineHabit = FromPrismaWithOmission<_RoutineHabit, "habit"> & { habit: Habit };
export type UserBelief = FromPrismaWithOmission<_UserBelief, "belief"> & { belief: Belief };
export type Identification = FromPrismaWithOmission<_Identification, "identity"> & {
  identity: Identity;
};
export type Calendar = Omit<_Calendar, "_count">;
export type CalendarEvent = FromPrismaWithOmission<_CalendarEvent, "start" | "end"> & {
  start: string;
  end?: string | null;
};
// export type ActionTheme = FromPrismaWithOmission<_ActionTheme, "start" | "end"> & {
//   start: string;
//   end?: string | null;
// };
export type UserValue = FromPrisma<_UserValue>;
export type User = FromPrismaWithOmission<_User, "settings"> & {
  // settings: { [key: string]: any; };
  settings: string | { [key: string]: any };
};
export type Dashboard = FromPrismaWithOmission<_Dashboard, "layouts"> & {
  layouts: string;
};
export type Note = FromPrisma<_Note>;
export type Notebook = FromPrismaWithOmission<_Notebook, "notes"> & {
  notes: Note[];
};
