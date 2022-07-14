import { ApolloContext } from "@/graphql/context";
import { CalendarCrudResolver } from "@/graphql/schema/resolvers/crud/Calendar/CalendarCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Calendar } from "../../../models/Calendar";
import { UpsertCalendarArgs } from "./args/UpsertCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class UpsertCalendarResolver {
  @TypeGraphQL.Mutation((_returns) => Calendar, {
    nullable: false,
  })
  async upsertCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCalendarArgs
  ): Promise<Calendar> {
    return CalendarCrudResolver.prototype.upsertCalendar(ctx, info, args);
  }
}
