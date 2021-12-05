/* eslint-disable */

import { IdentitySelectionToggleResolver } from "./resolvers/IdentitySelection/IdentitySelectionToggleResolver";
import { ScheduleToggleResolver } from "./resolvers/Schedule/ScheduleToggleResolver";
import * as generatedSchemaExports from "@/prisma/generated";
import { NonEmptyArray } from "type-graphql";

const { resolvers: generatedResolvers, ...generatedSchema } = generatedSchemaExports;

export const resolvers = [
  ...generatedResolvers,
  IdentitySelectionToggleResolver,
  ScheduleToggleResolver,
] as unknown as NonEmptyArray<Function>;
