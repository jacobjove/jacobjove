import { ApolloContext } from "@/graphql/context";
import { CalendarEventCrudResolver } from "@/graphql/schema/resolvers/crud/CalendarEvent/CalendarEventCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { UpsertCalendarEventArgs } from "./args/UpsertCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class UpsertCalendarEventResolver {
  @TypeGraphQL.Mutation((_returns) => CalendarEvent, {
    nullable: false,
  })
  async upsertCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCalendarEventArgs
  ): Promise<CalendarEvent> {
    return CalendarEventCrudResolver.prototype.upsertCalendarEvent(ctx, info, args);
  }
}
