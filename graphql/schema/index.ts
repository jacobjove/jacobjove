/* eslint-disable */

import * as generatedSchemaExports from "@/prisma/generated";
import {
  Action as _Action,
  ActionCompletion as _ActionCompletion,
  ActionScheduleTemplate as _ActionScheduleTemplate,
  ActionTheme as _ActionTheme,
  Belief as _Belief,
  Calendar as _Calendar,
  CalendarEvent as _CalendarEvent,
  Identity as _Identity,
  Routine as _Routine,
  RoutineAction as _RoutineAction,
  ScheduleTemplate as _ScheduleTemplate,
  User as _User,
  UserAction as _UserAction,
  UserActionSchedule as _UserActionSchedule,
  UserBelief as _UserBelief,
  UserIdentity as _UserIdentity,
  UserValue as _UserValue,
  Value as _Value,
} from "@/prisma/generated";
import { NonEmptyArray } from "type-graphql";
import { ActionAdoptionToggleResolver } from "./resolvers/ActionAdoptionToggleResolver";
import { ActionCompletionToggleResolver } from "./resolvers/ActionCompletionToggleResolver";
import { UserBeliefToggleResolver } from "./resolvers/UserBeliefToggleResolver";
import { UserIdentityToggleResolver } from "./resolvers/UserIdentityToggleResolver";
import { UserValueToggleResolver } from "./resolvers/UserValueToggleResolver";

const { resolvers: generatedResolvers, ...generatedSchema } = generatedSchemaExports;

export const resolvers = [
  ...generatedResolvers,
  UserIdentityToggleResolver,
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

export type Action = FromPrisma<_Action>;
export type UserAction = FromPrismaWithOmission<_UserAction, "action"> & {
  action: Action;
  schedules: UserActionSchedule[];
  themes: ActionTheme[];
};
export type ActionCompletion = FromPrismaWithOmission<
  _ActionCompletion,
  "userId" | "date" | "archivedAt" | "action"
> & {
  date: string;
  archivedAt?: string;
  action: Action;
};
export type UserActionSchedule = FromPrismaWithOmission<_UserActionSchedule, "archivedAt"> & {
  archivedAt?: string;
};
export type ActionScheduleTemplate = FromPrisma<_ActionScheduleTemplate>;
export type ScheduleTemplate = FromPrisma<_ScheduleTemplate>;
export type Identity = FromPrisma<_Identity>;
export type Value = FromPrisma<_Value>;
export type Belief = FromPrisma<_Belief>;
export type Routine = FromPrismaWithOmission<_Routine, "routineActions"> & {
  routineActions: RoutineAction[];
};
export type RoutineAction = FromPrismaWithOmission<_RoutineAction, "action"> & { action: Action };
export type UserBelief = FromPrismaWithOmission<_UserBelief, "belief"> & { belief: Belief };
export type UserIdentity = FromPrismaWithOmission<_UserIdentity, "identity"> & {
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
