import { ApolloContext } from "@/graphql/context";
import { CalendarEventCrudResolver } from "@/graphql/schema/resolvers/crud/CalendarEvent/CalendarEventCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { CreateCalendarEventArgs } from "./args/CreateCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class CreateCalendarEventResolver {
  @TypeGraphQL.Mutation((_returns) => CalendarEvent, { nullable: false })
  async createCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCalendarEventArgs
  ): Promise<CalendarEvent> {
    return CalendarEventCrudResolver.prototype.createCalendarEvent(ctx, info, args);
  }
}
