import { ApolloContext } from "@/graphql/context";
import { CalendarEventCrudResolver } from "@/graphql/schema/resolvers/crud/CalendarEvent/CalendarEventCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyCalendarEventArgs } from "./args/DeleteManyCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class DeleteManyCalendarEventResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCalendarEventArgs
  ): Promise<AffectedRowsOutput> {
    return CalendarEventCrudResolver.prototype.deleteManyCalendarEvent(ctx, info, args);
  }
}
