/* eslint-disable */

import { IdentitySelectionToggleResolver } from "./resolvers/IdentitySelectionToggleResolver";
import { ScheduleToggleResolver } from "./resolvers/ScheduleToggleResolver";
import * as generatedSchemaExports from "@/prisma/generated";
import { NonEmptyArray } from "type-graphql";
import {
  Action as _Action,
  ValueSelection as _ValueSelection,
  Identity as _Identity,
  Calendar as _Calendar,
  CalendarEvent as _CalendarEvent,
  Value as _Value,
  Schedule as _Schedule,
  IdentitySelection as _IdentitySelection,
} from "@/prisma/generated";

const { resolvers: generatedResolvers, ...generatedSchema } = generatedSchemaExports;

export const resolvers = ([
  ...generatedResolvers,
  IdentitySelectionToggleResolver,
  ScheduleToggleResolver,
] as unknown) as NonEmptyArray<Function>;

export type Action = Omit<_Action, "_count">;
export type Identity = Omit<_Identity, "_count">;
export type Value = Omit<_Value, "_count">;
export type IdentitySelection = Omit<_IdentitySelection, "_count">;
export type Schedule = Omit<_Schedule, "_count">;
export type Calendar = Omit<_Calendar, "_count">;
export type CalendarEvent = Omit<_CalendarEvent, "_count" | "start" | "end"> & {
  start: string;
  end: string;
};
export type ValueSelection = Omit<_ValueSelection, "_count">;
