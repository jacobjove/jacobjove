import { ApolloContext } from "@/graphql/context";
import { CalendarCrudResolver } from "@/graphql/schema/resolvers/crud/Calendar/CalendarCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Calendar } from "../../../models/Calendar";
import { DeleteCalendarArgs } from "./args/DeleteCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class DeleteCalendarResolver {
  @TypeGraphQL.Mutation((_returns) => Calendar, { nullable: true })
  async deleteCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCalendarArgs
  ): Promise<Calendar | null> {
    return CalendarCrudResolver.prototype.deleteCalendar(ctx, info, args);
  }
}
