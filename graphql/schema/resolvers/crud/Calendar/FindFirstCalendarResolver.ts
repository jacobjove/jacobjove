import { ApolloContext } from "@/graphql/context";
import { CalendarCrudResolver } from "@/graphql/schema/resolvers/crud/Calendar/CalendarCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Calendar } from "../../../models/Calendar";
import { FindFirstCalendarArgs } from "./args/FindFirstCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class FindFirstCalendarResolver {
  @TypeGraphQL.Query((_returns) => Calendar, {
    nullable: true,
  })
  async findFirstCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCalendarArgs
  ): Promise<Calendar | null> {
    return CalendarCrudResolver.prototype.findFirstCalendar(ctx, info, args);
  }
}
