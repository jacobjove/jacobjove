/* eslint-disable */

import * as generatedSchemaExports from "@/prisma/generated";
import {
  Action as _Action,
  ActionScheduleTemplate as _ActionScheduleTemplate,
  Calendar as _Calendar,
  CalendarEvent as _CalendarEvent,
  Identity as _Identity,
  ScheduleTemplate as _ScheduleTemplate,
  UserAction as _UserAction,
  UserActionSchedule as _UserActionSchedule,
  UserIdentity as _UserIdentity,
  UserValue as _UserValue,
  Value as _Value,
} from "@/prisma/generated";
import { NonEmptyArray } from "type-graphql";
import { UserActionToggleResolver } from "./resolvers/UserActionToggleResolver";
import { UserIdentityToggleResolver } from "./resolvers/UserIdentityToggleResolver";

const { resolvers: generatedResolvers, ...generatedSchema } = generatedSchemaExports;

export const resolvers = [
  ...generatedResolvers,
  UserIdentityToggleResolver,
  UserActionToggleResolver,
] as unknown as NonEmptyArray<Function>;

export type Action = Omit<_Action, "_count">;
export type UserAction = Omit<_UserAction, "_count">;
export type UserActionSchedule = Omit<_UserActionSchedule, "_count">;
export type ActionScheduleTemplate = Omit<_ActionScheduleTemplate, "_count">;
export type ScheduleTemplate = Omit<_ScheduleTemplate, "_count">;
export type Identity = Omit<_Identity, "_count">;
export type Value = Omit<_Value, "_count">;
export type UserIdentity = Omit<_UserIdentity, "_count">;
export type Calendar = Omit<_Calendar, "_count">;
export type CalendarEvent = Omit<_CalendarEvent, "_count" | "start" | "end"> & {
  start: string;
  end?: string | null;
};
export type UserValue = Omit<_UserValue, "_count">;
