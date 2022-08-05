import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionSchedule } from "@/graphql/schema/generated/models/actionSchedule.model";
import { Calendar } from "@/graphql/schema/generated/models/calendar.model";
import { CalendarEvent } from "@/graphql/schema/generated/models/calendarEvent.model";
import { Habit } from "@/graphql/schema/generated/models/habit.model";
import { Task } from "@/graphql/schema/generated/models/task.model";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class CalendarEventRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Calendar, { nullable: false })
  async calendar(
    @TypeGraphQL.Root() calendarEvent: CalendarEvent,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Calendar> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => ActionSchedule, { nullable: true })
  async schedule(
    @TypeGraphQL.Root() calendarEvent: CalendarEvent,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<ActionSchedule | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Habit, { nullable: true })
  async habit(
    @TypeGraphQL.Root() calendarEvent: CalendarEvent,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Habit | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Task, { nullable: true })
  async task(
    @TypeGraphQL.Root() calendarEvent: CalendarEvent,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Task | null> {
    throw new Error("Not implemented");
  }
}
