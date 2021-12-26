/* eslint-disable */

import * as generatedSchemaExports from "@/prisma/generated";
import {
  Action as _Action,
  ActionSchedule as _ActionSchedule,
  Calendar as _Calendar,
  CalendarEvent as _CalendarEvent,
  Identity as _Identity,
  IdentitySelection as _IdentitySelection,
  Schedule as _Schedule,
  UserAction as _UserAction,
  UserActionSchedule as _UserActionSchedule,
  Value as _Value,
  ValueSelection as _ValueSelection,
} from "@/prisma/generated";
import { NonEmptyArray } from "type-graphql";
import { IdentitySelectionToggleResolver } from "./resolvers/IdentitySelectionToggleResolver";
import { ScheduleToggleResolver } from "./resolvers/ScheduleToggleResolver";

const { resolvers: generatedResolvers, ...generatedSchema } = generatedSchemaExports;

export const resolvers = [
  ...generatedResolvers,
  IdentitySelectionToggleResolver,
  ScheduleToggleResolver,
] as unknown as NonEmptyArray<Function>;

export type Action = Omit<_Action, "_count">;
export type UserAction = Omit<_UserAction, "_count">;
export type Identity = Omit<_Identity, "_count">;
export type Value = Omit<_Value, "_count">;
export type IdentitySelection = Omit<_IdentitySelection, "_count">;
export type Schedule = Omit<_Schedule, "_count">;
export type ActionSchedule = Omit<_ActionSchedule, "_count">;
export type UserActionSchedule = Omit<_UserActionSchedule, "_count">;
export type Calendar = Omit<_Calendar, "_count">;
export type CalendarEvent = Omit<_CalendarEvent, "_count" | "start" | "end"> & {
  start: string;
  end: string;
};
export type ValueSelection = Omit<_ValueSelection, "_count">;
