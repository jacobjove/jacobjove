import { ApolloContext } from "@/graphql/context";
import { CalendarEventCrudResolver } from "@/graphql/schema/resolvers/crud/CalendarEvent/CalendarEventCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { FindUniqueCalendarEventArgs } from "./args/FindUniqueCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class FindUniqueCalendarEventResolver {
  @TypeGraphQL.Query((_returns) => CalendarEvent, { nullable: true })
  async calendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCalendarEventArgs
  ): Promise<CalendarEvent | null> {
    return CalendarEventCrudResolver.prototype.calendarEvent(ctx, info, args);
  }
}
