import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getFirestoreDocDataFromSnapshot, getPrismaFromContext } from "../../../helpers";
import { Action } from "../../../models/Action";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { Goal } from "../../../models/Goal";
import { Habit } from "../../../models/Habit";
import { MetricUsage } from "../../../models/MetricUsage";
import { RoutineHabit } from "../../../models/RoutineHabit";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { HabitActionsArgs } from "./args/HabitActionsArgs";
import { HabitCalendarEventsArgs } from "./args/HabitCalendarEventsArgs";
import { HabitGoalsArgs } from "./args/HabitGoalsArgs";
import { HabitMetricUsagesArgs } from "./args/HabitMetricUsagesArgs";
import { HabitRoutinesArgs } from "./args/HabitRoutinesArgs";
import { HabitSchedulesArgs } from "./args/HabitSchedulesArgs";
import { HabitTasksArgs } from "./args/HabitTasksArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class HabitRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() habit: Habit,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<User> {
    if (USE_FIREBASE) {
      return await firestore
        .doc(`users/${habit.userId}`)
        .get()
        .then(async (doc) => {
          return getFirestoreDocDataFromSnapshot(doc) as Promise<User>;
        });
    } else {
      return getPrismaFromContext(ctx)
        .habit.findUnique({
          where: {
            id: habit.id,
          },
        })
        .user({});
    }
  }

  @TypeGraphQL.FieldResolver((_type) => [ActionSchedule], { nullable: false })
  async schedules(
    @TypeGraphQL.Root() habit: Habit,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: HabitSchedulesArgs
  ): Promise<ActionSchedule[]> {
    if (USE_FIREBASE) {
      return await firestore
        .collection(`users/${habit.userId}/actionSchedules`)
        .listDocuments()
        .then(async (documents) => {
          return Promise.all(
            documents.map(async (doc) => {
              const _doc = await doc.get();
              return {
                id: _doc.id,
                ..._doc.data(),
              } as ActionSchedule;
            })
          );
        });
    } else {
      return getPrismaFromContext(ctx)
        .habit.findUnique({
          where: {
            id: habit.id,
          },
        })
        .schedules(args);
    }
  }

  @TypeGraphQL.FieldResolver((_type) => [Task], { nullable: false })
  async tasks(
    @TypeGraphQL.Root() habit: Habit,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: HabitTasksArgs
  ): Promise<Task[]> {
    if (USE_FIREBASE) {
      return await firestore
        .collection(`users/${habit.userId}/tasks`)
        .where("habitId", "==", habit.id)
        .get()
        .then(async (snapshot) => {
          return Promise.all(
            snapshot.docs.map(async (doc) => {
              return getFirestoreDocDataFromSnapshot(doc) as Promise<Task>;
            })
          );
        });
    } else {
      return getPrismaFromContext(ctx)
        .habit.findUnique({
          where: {
            id: habit.id,
          },
        })
        .tasks(args);
    }
  }

  @TypeGraphQL.FieldResolver((_type) => [CalendarEvent], { nullable: false })
  async calendarEvents(
    @TypeGraphQL.Root() habit: Habit,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: HabitCalendarEventsArgs
  ): Promise<CalendarEvent[]> {
    if (USE_FIREBASE) {
      return await firestore
        .collection(`users/${habit.userId}/calendarEvents`)
        .where("habitId", "==", habit.id)
        .get()
        .then(async (snapshot) => {
          return Promise.all(
            snapshot.docs.map((doc) => {
              return getFirestoreDocDataFromSnapshot(doc) as Promise<CalendarEvent>;
            })
          );
        });
    } else {
      return getPrismaFromContext(ctx)
        .habit.findUnique({
          where: {
            id: habit.id,
          },
        })
        .calendarEvents(args);
    }
  }

  @TypeGraphQL.FieldResolver((_type) => [MetricUsage], { nullable: false })
  async metricUsages(
    @TypeGraphQL.Root() habit: Habit,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: HabitMetricUsagesArgs
  ): Promise<MetricUsage[]> {
    if (USE_FIREBASE) {
      throw new Error("Not implemented: metricUsages");
    } else {
      return getPrismaFromContext(ctx)
        .habit.findUnique({
          where: {
            id: habit.id,
          },
        })
        .metricUsages(args);
    }
  }

  @TypeGraphQL.FieldResolver((_type) => [Goal], { nullable: false })
  async goals(
    @TypeGraphQL.Root() habit: Habit,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: HabitGoalsArgs
  ): Promise<Goal[]> {
    if (USE_FIREBASE) {
      throw new Error("Not implemented: goals");
    } else {
      return getPrismaFromContext(ctx)
        .habit.findUnique({
          where: {
            id: habit.id,
          },
        })
        .goals(args);
    }
  }

  @TypeGraphQL.FieldResolver((_type) => [RoutineHabit], { nullable: false })
  async routines(
    @TypeGraphQL.Root() habit: Habit,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: HabitRoutinesArgs
  ): Promise<RoutineHabit[]> {
    if (USE_FIREBASE) {
      throw new Error("Not implemented: routines");
    } else {
      return getPrismaFromContext(ctx)
        .habit.findUnique({
          where: {
            id: habit.id,
          },
        })
        .routines(args);
    }
  }

  @TypeGraphQL.FieldResolver((_type) => [Action], { nullable: false })
  async actions(
    @TypeGraphQL.Root() habit: Habit,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: HabitActionsArgs
  ): Promise<Action[]> {
    if (USE_FIREBASE) {
      throw new Error("Not implemented: actions");
    } else {
      return getPrismaFromContext(ctx)
        .habit.findUnique({
          where: {
            id: habit.id,
          },
        })
        .actions(args);
    }
  }
}
