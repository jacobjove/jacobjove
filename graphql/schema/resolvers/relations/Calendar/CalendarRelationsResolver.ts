import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getFirestoreDocDataFromSnapshot, getPrismaFromContext } from "../../../helpers";
import { Account } from "../../../models/Account";
import { Calendar } from "../../../models/Calendar";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { User } from "../../../models/User";
import { CalendarEventsArgs } from "./args/CalendarEventsArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class CalendarRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() calendar: Calendar,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<User> {
    if (USE_FIREBASE) {
      return await firestore
        .doc(`users/${calendar.userId}`)
        .get()
        .then(async (doc) => {
          return getFirestoreDocDataFromSnapshot(doc) as Promise<User>;
        });
    } else {
      return getPrismaFromContext(ctx)
        .calendar.findUnique({
          where: {
            id: calendar.id,
          },
        })
        .user({});
    }
  }

  @TypeGraphQL.FieldResolver((_type) => Account, { nullable: true })
  async account(
    @TypeGraphQL.Root() calendar: Calendar,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Account | null> {
    return getPrismaFromContext(ctx)
      .calendar.findUnique({
        where: {
          id: calendar.id,
        },
      })
      .account({});
  }

  @TypeGraphQL.FieldResolver((_type) => [CalendarEvent], { nullable: false })
  async events(
    @TypeGraphQL.Root() calendar: Calendar,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: CalendarEventsArgs
  ): Promise<CalendarEvent[]> {
    if (USE_FIREBASE) {
      return await firestore
        .collection(`users/${ctx.session?.user.id}/calendarEvents`)
        .where("calendarId", "==", calendar.id)
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
        .calendar.findUnique({
          where: {
            id: calendar.id,
          },
        })
        .events(args);
    }
  }
}
