import { ApolloContext } from "@/graphql/context";
import { CalendarEventCrudResolver } from "@/graphql/schema/resolvers/crud/CalendarEvent/CalendarEventCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { FindFirstCalendarEventArgs } from "./args/FindFirstCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class FindFirstCalendarEventResolver {
  @TypeGraphQL.Query((_returns) => CalendarEvent, {
    nullable: true,
  })
  async findFirstCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCalendarEventArgs
  ): Promise<CalendarEvent | null> {
    return CalendarEventCrudResolver.prototype.findFirstCalendarEvent(ctx, info, args);
  }
}
