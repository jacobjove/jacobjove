import { ApolloContext } from "@/graphql/context";
import { CalendarCrudResolver } from "@/graphql/schema/resolvers/crud/Calendar/CalendarCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Calendar } from "../../../models/Calendar";
import { AggregateCalendar } from "../../outputs/AggregateCalendar";
import { AggregateCalendarArgs } from "./args/AggregateCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class AggregateCalendarResolver {
  @TypeGraphQL.Query((_returns) => AggregateCalendar, { nullable: false })
  async aggregateCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCalendarArgs
  ): Promise<AggregateCalendar> {
    return CalendarCrudResolver.prototype.aggregateCalendar(ctx, info, args);
  }
}
