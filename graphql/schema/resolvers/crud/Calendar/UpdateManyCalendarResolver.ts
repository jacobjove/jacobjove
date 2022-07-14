import { ApolloContext } from "@/graphql/context";
import { CalendarCrudResolver } from "@/graphql/schema/resolvers/crud/Calendar/CalendarCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Calendar } from "../../../models/Calendar";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyCalendarArgs } from "./args/UpdateManyCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class UpdateManyCalendarResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCalendarArgs
  ): Promise<AffectedRowsOutput> {
    return CalendarCrudResolver.prototype.updateManyCalendar(ctx, info, args);
  }
}
