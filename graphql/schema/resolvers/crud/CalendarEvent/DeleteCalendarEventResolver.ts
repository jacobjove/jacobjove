import { ApolloContext } from "@/graphql/context";
import { CalendarEventCrudResolver } from "@/graphql/schema/resolvers/crud/CalendarEvent/CalendarEventCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { DeleteCalendarEventArgs } from "./args/DeleteCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class DeleteCalendarEventResolver {
  @TypeGraphQL.Mutation((_returns) => CalendarEvent, { nullable: true })
  async deleteCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCalendarEventArgs
  ): Promise<CalendarEvent | null> {
    return CalendarEventCrudResolver.prototype.deleteCalendarEvent(ctx, info, args);
  }
}
