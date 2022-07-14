import { ApolloContext } from "@/graphql/context";
import { CalendarCrudResolver } from "@/graphql/schema/resolvers/crud/Calendar/CalendarCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Calendar } from "../../../models/Calendar";
import { UpdateCalendarArgs } from "./args/UpdateCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class UpdateCalendarResolver {
  @TypeGraphQL.Mutation((_returns) => Calendar, {
    nullable: true,
  })
  async updateCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCalendarArgs
  ): Promise<Calendar | null> {
    return CalendarCrudResolver.prototype.updateCalendar(ctx, info, args);
  }
}
