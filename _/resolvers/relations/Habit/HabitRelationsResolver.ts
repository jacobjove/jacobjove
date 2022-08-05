import { GqlContext } from "@/graphql/context";
import { MetricUsage, RoutineHabit } from "@/graphql/schema/generated/models";
import { Action } from "@/graphql/schema/generated/models/action.model";
import { ActionSchedule } from "@/graphql/schema/generated/models/actionSchedule.model";
import { CalendarEvent } from "@/graphql/schema/generated/models/calendarEvent.model";
import { Goal } from "@/graphql/schema/generated/models/goal.model";
import { Habit } from "@/graphql/schema/generated/models/habit.model";
import { User } from "@/graphql/schema/generated/models/user.model";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitActionsArgs } from "./args/HabitActionsArgs";
import { HabitCalendarEventsArgs } from "./args/HabitCalendarEventsArgs";
import { HabitGoalsArgs } from "./args/HabitGoalsArgs";
import { HabitMetricUsagesArgs } from "./args/HabitMetricUsagesArgs";
import { HabitRoutinesArgs } from "./args/HabitRoutinesArgs";
import { HabitSchedulesArgs } from "./args/HabitSchedulesArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class HabitRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async user(@TypeGraphQL.Root() habit: Habit, @TypeGraphQL.Ctx() ctx: GqlContext): Promise<User> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [ActionSchedule], { nullable: false })
  async schedules(
    @TypeGraphQL.Root() habit: Habit,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: HabitSchedulesArgs
  ): Promise<ActionSchedule[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [CalendarEvent], { nullable: false })
  async calendarEvents(
    @TypeGraphQL.Root() habit: Habit,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: HabitCalendarEventsArgs
  ): Promise<CalendarEvent[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [MetricUsage], { nullable: false })
  async metricUsages(
    @TypeGraphQL.Root() habit: Habit,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: HabitMetricUsagesArgs
  ): Promise<MetricUsage[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Goal], { nullable: false })
  async goals(
    @TypeGraphQL.Root() habit: Habit,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: HabitGoalsArgs
  ): Promise<Goal[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [RoutineHabit], { nullable: false })
  async routines(
    @TypeGraphQL.Root() habit: Habit,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: HabitRoutinesArgs
  ): Promise<RoutineHabit[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Action], { nullable: false })
  async actions(
    @TypeGraphQL.Root() habit: Habit,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: HabitActionsArgs
  ): Promise<Action[]> {
    throw new Error("Not implemented");
  }
}
