import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionSchedule } from "@/graphql/schema/generated/models/actionSchedule.model";
import { ActionScheduleTemplate } from "@/graphql/schema/generated/models/actionScheduleTemplate.model";
import { CalendarEvent } from "@/graphql/schema/generated/models/calendarEvent.model";
import { Habit } from "@/graphql/schema/generated/models/habit.model";
import { ActionScheduleCalendarEventsArgs } from "./args/ActionScheduleCalendarEventsArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class ActionScheduleRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Habit, { nullable: false })
  async habit(
    @TypeGraphQL.Root() actionSchedule: ActionSchedule,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Habit> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [CalendarEvent], { nullable: false })
  async calendarEvents(
    @TypeGraphQL.Root() actionSchedule: ActionSchedule,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: ActionScheduleCalendarEventsArgs
  ): Promise<CalendarEvent[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => ActionScheduleTemplate, { nullable: true })
  async template(
    @TypeGraphQL.Root() actionSchedule: ActionSchedule,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<ActionScheduleTemplate | null> {
    throw new Error("Not implemented");
  }
}
