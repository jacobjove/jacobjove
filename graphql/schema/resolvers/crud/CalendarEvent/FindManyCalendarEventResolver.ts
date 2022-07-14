import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getFirestoreDocDataFromSnapshot,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { FindManyCalendarEventArgs } from "./args/FindManyCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class FindManyCalendarEventResolver {
  @TypeGraphQL.Query((_returns) => [CalendarEvent], {
    nullable: false,
  })
  async calendarEvents(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCalendarEventArgs
  ): Promise<CalendarEvent[]> {
    const { _count } = transformFields(graphqlFields(info));
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).calendarEvent.findMany({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
    } else {
      const calendarEventsRef = firestore.collection(`users/${ctx.token?.uid}/calendarEvents`);
      const snapshot = await calendarEventsRef.get();
      return Promise.all(
        snapshot.docs.map((doc) => getFirestoreDocDataFromSnapshot(doc) as Promise<CalendarEvent>)
      );
    }
  }
}
