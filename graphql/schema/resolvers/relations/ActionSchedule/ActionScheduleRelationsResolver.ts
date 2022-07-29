import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getFirestoreDocDataFromSnapshot, getPrismaFromContext } from "../../../helpers";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { ActionScheduleTemplate } from "../../../models/ActionScheduleTemplate";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { Habit } from "../../../models/Habit";
import { ActionScheduleCalendarEventsArgs } from "./args/ActionScheduleCalendarEventsArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class ActionScheduleRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Habit, { nullable: false })
  async habit(
    @TypeGraphQL.Root() actionSchedule: ActionSchedule,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Habit> {
    return getPrismaFromContext(ctx)
      .actionSchedule.findUnique({
        where: {
          id: actionSchedule.id,
        },
      })
      .habit({});
  }

  @TypeGraphQL.FieldResolver((_type) => [CalendarEvent], { nullable: false })
  async calendarEvents(
    @TypeGraphQL.Root() actionSchedule: ActionSchedule,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: ActionScheduleCalendarEventsArgs
  ): Promise<CalendarEvent[]> {
    if (USE_FIREBASE) {
      return await firestore
        .collection(`users/${actionSchedule.habit?.userId}/calendarEvents`)
        .where("scheduleId", "==", actionSchedule.id)
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
        .actionSchedule.findUnique({
          where: {
            id: actionSchedule.id,
          },
        })
        .calendarEvents(args);
    }
  }

  @TypeGraphQL.FieldResolver((_type) => ActionScheduleTemplate, { nullable: true })
  async template(
    @TypeGraphQL.Root() actionSchedule: ActionSchedule,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<ActionScheduleTemplate | null> {
    return getPrismaFromContext(ctx)
      .actionSchedule.findUnique({
        where: {
          id: actionSchedule.id,
        },
      })
      .template({});
  }
}
