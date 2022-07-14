import { ApolloContext } from "@/graphql/context";
import { CalendarCrudResolver } from "@/graphql/schema/resolvers/crud/Calendar/CalendarCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Calendar } from "../../../models/Calendar";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyCalendarArgs } from "./args/DeleteManyCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class DeleteManyCalendarResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCalendarArgs
  ): Promise<AffectedRowsOutput> {
    return CalendarCrudResolver.prototype.deleteManyCalendar(ctx, info, args);
  }
}
