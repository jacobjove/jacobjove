import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getFirestoreDocDataFromSnapshot, getPrismaFromContext } from "../../../helpers";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { FindManyCalendarEventArgs } from "./args/FindManyCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class FindManyCalendarEventResolver {
  @TypeGraphQL.Query((_returns) => [CalendarEvent], { nullable: false })
  async calendarEvents(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCalendarEventArgs
  ): Promise<CalendarEvent[]> {
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).calendarEvent.findMany({ ...args });
    } else {
      const calendarEventsRef = firestore.collection(
        `users/${ctx.session?.user.id}/calendarEvents`
      );
      const snapshot = await calendarEventsRef.get();
      return Promise.all(
        snapshot.docs.map((doc) => getFirestoreDocDataFromSnapshot(doc) as Promise<CalendarEvent>)
      );
    }
  }
}
