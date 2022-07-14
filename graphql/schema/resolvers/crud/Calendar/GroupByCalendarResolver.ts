import { ApolloContext } from "@/graphql/context";
import { CalendarCrudResolver } from "@/graphql/schema/resolvers/crud/Calendar/CalendarCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Calendar } from "../../../models/Calendar";
import { CalendarGroupBy } from "../../outputs/CalendarGroupBy";
import { GroupByCalendarArgs } from "./args/GroupByCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class GroupByCalendarResolver {
  @TypeGraphQL.Query((_returns) => [CalendarGroupBy], {
    nullable: false,
  })
  async groupByCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByCalendarArgs
  ): Promise<CalendarGroupBy[]> {
    return CalendarCrudResolver.prototype.groupByCalendar(ctx, info, args);
  }
}
