import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getFirestoreDocDataFromSnapshot, getPrismaFromContext } from "../../../helpers";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { Habit } from "../../../models/Habit";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { TaskCalendarEventsArgs } from "./args/TaskCalendarEventsArgs";
import { TaskSubtasksArgs } from "./args/TaskSubtasksArgs";

@TypeGraphQL.Resolver((_of) => Task)
export class TaskRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, { nullable: false })
  async user(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: ApolloContext): Promise<User> {
    if (USE_FIREBASE) {
      return firestore
        .doc(`users/${task.userId}`)
        .get()
        .then((doc) => getFirestoreDocDataFromSnapshot(doc) as Promise<User>);
      // return firestore.collection(`users/${ctx.session?.user.id}/tasks`).where("id", "==", task.id).get().then(async snapshot => {
      //   return firestore.doc(`users/${task.userId}`).get().then(doc => getFirestoreDocDataFromSnapshot(doc) as Promise<User>);
      // });
    } else {
      return getPrismaFromContext(ctx)
        .task.findUnique({
          where: {
            id: task.id,
          },
        })
        .user({});
    }
  }

  @TypeGraphQL.FieldResolver((_type) => Task, { nullable: true })
  async parent(
    @TypeGraphQL.Root() task: Task,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Task | null> {
    if (USE_FIREBASE) {
      console.error("Not implemented");
      throw new Error("not implemented");
    } else {
      return getPrismaFromContext(ctx)
        .task.findUnique({
          where: {
            id: task.id,
          },
        })
        .parent({});
    }
  }

  @TypeGraphQL.FieldResolver((_type) => Habit, { nullable: true })
  async habit(
    @TypeGraphQL.Root() task: Task,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Habit | null> {
    if (USE_FIREBASE) {
      if (!task.habitId) return null;
      return await firestore
        .doc(`users/${task.userId}/habits/${task.habitId}`)
        .get()
        .then((doc) => {
          return getFirestoreDocDataFromSnapshot(doc) as Promise<Habit>;
        });
    } else {
      return getPrismaFromContext(ctx)
        .task.findUnique({
          where: {
            id: task.id,
          },
        })
        .habit({});
    }
  }

  @TypeGraphQL.FieldResolver((_type) => [Task], { nullable: false })
  async subtasks(
    @TypeGraphQL.Root() task: Task,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: TaskSubtasksArgs
  ): Promise<Task[]> {
    if (USE_FIREBASE) {
      const subtasks = await firestore
        .collection(`users/${task.userId}/tasks`)
        .where("parentId", "==", task.id)
        .get()
        .then((snapshot) => {
          return Promise.all(
            snapshot.docs.map((doc) => {
              return getFirestoreDocDataFromSnapshot(doc) as Promise<Task>;
            })
          );
        });
      return subtasks;
    } else {
      return getPrismaFromContext(ctx)
        .task.findUnique({
          where: {
            id: task.id,
          },
        })
        .subtasks(args);
    }
  }

  @TypeGraphQL.FieldResolver((_type) => [CalendarEvent], { nullable: false })
  async calendarEvents(
    @TypeGraphQL.Root() task: Task,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: TaskCalendarEventsArgs
  ): Promise<CalendarEvent[]> {
    if (USE_FIREBASE) {
      console.error("Not implemented");
      throw new Error("not implemented");
    } else {
      return getPrismaFromContext(ctx)
        .task.findUnique({
          where: {
            id: task.id,
          },
        })
        .calendarEvents(args);
    }
  }
}
