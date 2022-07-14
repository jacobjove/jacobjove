import { ApolloContext } from "@/graphql/context";
import { CalendarEventCrudResolver } from "@/graphql/schema/resolvers/crud/CalendarEvent/CalendarEventCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { AggregateCalendarEvent } from "../../outputs/AggregateCalendarEvent";
import { AggregateCalendarEventArgs } from "./args/AggregateCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class AggregateCalendarEventResolver {
  @TypeGraphQL.Query((_returns) => AggregateCalendarEvent, {
    nullable: false,
  })
  async aggregateCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCalendarEventArgs
  ): Promise<AggregateCalendarEvent> {
    return CalendarEventCrudResolver.prototype.aggregateCalendarEvent(ctx, info, args);
  }
}
