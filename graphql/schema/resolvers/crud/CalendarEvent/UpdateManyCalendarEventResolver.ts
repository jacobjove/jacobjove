import { ApolloContext } from "@/graphql/context";
import { CalendarEventCrudResolver } from "@/graphql/schema/resolvers/crud/CalendarEvent/CalendarEventCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyCalendarEventArgs } from "./args/UpdateManyCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class UpdateManyCalendarEventResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCalendarEventArgs
  ): Promise<AffectedRowsOutput> {
    return CalendarEventCrudResolver.prototype.updateManyCalendarEvent(ctx, info, args);
  }
}
