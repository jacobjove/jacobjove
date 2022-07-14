import { ApolloContext } from "@/graphql/context";
import { CalendarEventCrudResolver } from "@/graphql/schema/resolvers/crud/CalendarEvent/CalendarEventCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyCalendarEventArgs } from "./args/CreateManyCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class CreateManyCalendarEventResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCalendarEventArgs
  ): Promise<AffectedRowsOutput> {
    return CalendarEventCrudResolver.prototype.createManyCalendarEvent(ctx, info, args);
  }
}
