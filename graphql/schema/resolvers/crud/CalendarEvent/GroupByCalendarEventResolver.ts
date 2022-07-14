import { ApolloContext } from "@/graphql/context";
import { CalendarEventCrudResolver } from "@/graphql/schema/resolvers/crud/CalendarEvent/CalendarEventCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { CalendarEventGroupBy } from "../../outputs/CalendarEventGroupBy";
import { GroupByCalendarEventArgs } from "./args/GroupByCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class GroupByCalendarEventResolver {
  @TypeGraphQL.Query((_returns) => [CalendarEventGroupBy], {
    nullable: false,
  })
  async groupByCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByCalendarEventArgs
  ): Promise<CalendarEventGroupBy[]> {
    return CalendarEventCrudResolver.prototype.groupByCalendarEvent(ctx, info, args);
  }
}
