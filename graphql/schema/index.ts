/* eslint-disable */

import * as generatedSchemaExports from "@/prisma/generated";
import {
  Act as _Act,
  Action as _Action,
  ActionCompletion as _ActionCompletion,
  ActionSchedule as _ActionSchedule,
  ActionScheduleTemplate as _ActionScheduleTemplate,
  ActionTheme as _ActionTheme,
  Belief as _Belief,
  Calendar as _Calendar,
  CalendarEvent as _CalendarEvent,
  Dashboard as _Dashboard,
  Identification as _Identification,
  Identity as _Identity,
  RoutineAction as _RoutineAction,
  ScheduleTemplate as _ScheduleTemplate,
  User as _User,
  UserBelief as _UserBelief,
  UserValue as _UserValue,
  Value as _Value,
} from "@/prisma/generated";
import { NonEmptyArray } from "type-graphql";
import { ActionAdoptionToggleResolver } from "./resolvers/ActionAdoptionToggleResolver";
import { ActionCompletionToggleResolver } from "./resolvers/ActionCompletionToggleResolver";
import { IdentificationToggleResolver } from "./resolvers/IdentificationToggleResolver";
import { UserBeliefToggleResolver } from "./resolvers/UserBeliefToggleResolver";
import { UserValueToggleResolver } from "./resolvers/UserValueToggleResolver";

const { resolvers: generatedResolvers, ...generatedSchema } = generatedSchemaExports;

export const resolvers = [
  ...generatedResolvers,
  IdentificationToggleResolver,
  ActionAdoptionToggleResolver,
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
export type Action = FromPrismaWithOmission<_Action, "template" | "completions"> & {
  template: Act;
  schedules: ActionSchedule[];
  themes: ActionTheme[];
  completions: ActionCompletion[] | undefined;
  routineActions: RoutineAction[];
};
export type ActionCompletion = FromPrismaWithOmission<
  _ActionCompletion,
  "date" | "archivedAt" | "action"
> & {
  date: string;
  archivedAt: string | null;
  action: Action;
};
export type ActionSchedule = FromPrismaWithOmission<_ActionSchedule, "archivedAt"> & {
  archivedAt?: string;
};
export type ActionScheduleTemplate = FromPrisma<_ActionScheduleTemplate>;
export type ScheduleTemplate = FromPrisma<_ScheduleTemplate>;
export type Identity = FromPrisma<_Identity>;
export type Value = FromPrisma<_Value>;
export type Belief = FromPrisma<_Belief>;
export type RoutineAction = FromPrismaWithOmission<_RoutineAction, "action"> & { action: Action };
export type UserBelief = FromPrismaWithOmission<_UserBelief, "belief"> & { belief: Belief };
export type Identification = FromPrismaWithOmission<_Identification, "identity"> & {
  identity: Identity;
};
export type Calendar = Omit<_Calendar, "_count">;
export type CalendarEvent = FromPrismaWithOmission<_CalendarEvent, "start" | "end"> & {
  start: string;
  end?: string | null;
};
export type ActionTheme = FromPrismaWithOmission<_ActionTheme, "start" | "end"> & {
  start: string;
  end?: string | null;
};
export type UserValue = FromPrisma<_UserValue>;
export type User = FromPrismaWithOmission<_User, "settings"> & {
  settings: {
    defaultCalendarId: number;
    dashboard?: {
      layouts: {
        xs?: any;
      };
    };
  };
};
export type Dashboard = FromPrismaWithOmission<_Dashboard, "layouts"> & {
  layouts: string;
};
