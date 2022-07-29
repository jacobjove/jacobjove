import { ApolloContext } from "@/graphql/context";
import { CalendarEventCrudResolver } from "@/graphql/schema/resolvers/crud/CalendarEvent/CalendarEventCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { UpdateCalendarEventArgs } from "./args/UpdateCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class UpdateCalendarEventResolver {
  @TypeGraphQL.Mutation((_returns) => CalendarEvent, { nullable: true })
  async updateCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCalendarEventArgs
  ): Promise<CalendarEvent | null> {
    return CalendarEventCrudResolver.prototype.updateCalendarEvent(ctx, info, args);
  }
}
