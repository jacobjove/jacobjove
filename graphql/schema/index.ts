/* eslint-disable */

import * as generatedSchemaExports from "@/prisma/generated";
import {
  Action as _Action,
  ActionScheduleTemplate as _ActionScheduleTemplate,
  Belief as _Belief,
  Calendar as _Calendar,
  CalendarEvent as _CalendarEvent,
  Identity as _Identity,
  Routine as _Routine,
  RoutineAction as _RoutineAction,
  ScheduleTemplate as _ScheduleTemplate,
  UserAction as _UserAction,
  UserActionSchedule as _UserActionSchedule,
  UserBelief as _UserBelief,
  UserIdentity as _UserIdentity,
  UserValue as _UserValue,
  Value as _Value,
} from "@/prisma/generated";
import { NonEmptyArray } from "type-graphql";
import { UserActionToggleResolver } from "./resolvers/UserActionToggleResolver";
import { UserBeliefToggleResolver } from "./resolvers/UserBeliefToggleResolver";
import { UserIdentityToggleResolver } from "./resolvers/UserIdentityToggleResolver";
import { UserValueToggleResolver } from "./resolvers/UserValueToggleResolver";

const { resolvers: generatedResolvers, ...generatedSchema } = generatedSchemaExports;

export const resolvers = [
  ...generatedResolvers,
  UserIdentityToggleResolver,
  UserActionToggleResolver,
  UserValueToggleResolver,
  UserBeliefToggleResolver,
] as unknown as NonEmptyArray<Function>;

export type Action = Omit<_Action, "_count">;
export type UserAction = Omit<_UserAction, "_count" | "action"> & {
  action: Action;
  schedules: UserActionSchedule[];
};
export type UserActionSchedule = Omit<_UserActionSchedule, "_count">;
export type ActionScheduleTemplate = Omit<_ActionScheduleTemplate, "_count">;
export type ScheduleTemplate = Omit<_ScheduleTemplate, "_count">;
export type Identity = Omit<_Identity, "_count">;
export type Value = Omit<_Value, "_count">;
export type Belief = Omit<_Belief, "_count">;
export type Routine = Omit<_Routine, "_count">;
export type RoutineAction = Omit<_RoutineAction, "_count">;
export type UserBelief = Omit<_UserBelief, "_count" | "belief"> & { belief: Belief };
export type UserIdentity = Omit<_UserIdentity, "_count" | "identity"> & { identity: Identity };
export type Calendar = Omit<_Calendar, "_count">;
export type CalendarEvent = Omit<_CalendarEvent, "_count" | "start" | "end"> & {
  start: string;
  end?: string | null;
};
export type UserValue = Omit<_UserValue, "_count">;
