import { ApolloContext } from "@/graphql/context";
import { CalendarCrudResolver } from "@/graphql/schema/resolvers/crud/Calendar/CalendarCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Calendar } from "../../../models/Calendar";
import { FindUniqueCalendarArgs } from "./args/FindUniqueCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class FindUniqueCalendarResolver {
  @TypeGraphQL.Query((_returns) => Calendar, {
    nullable: true,
  })
  async calendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCalendarArgs
  ): Promise<Calendar | null> {
    return CalendarCrudResolver.prototype.calendar(ctx, info, args);
  }
}
