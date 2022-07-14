import { ApolloContext } from "@/graphql/context";
import { CalendarCrudResolver } from "@/graphql/schema/resolvers/crud/Calendar/CalendarCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Calendar } from "../../../models/Calendar";
import { CreateCalendarArgs } from "./args/CreateCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class CreateCalendarResolver {
  @TypeGraphQL.Mutation((_returns) => Calendar, {
    nullable: false,
  })
  async createCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCalendarArgs
  ): Promise<Calendar> {
    return CalendarCrudResolver.prototype.createCalendar(ctx, info, args);
  }
}
