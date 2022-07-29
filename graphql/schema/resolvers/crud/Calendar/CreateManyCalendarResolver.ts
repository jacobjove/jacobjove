import { ApolloContext } from "@/graphql/context";
import { CalendarCrudResolver } from "@/graphql/schema/resolvers/crud/Calendar/CalendarCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Calendar } from "../../../models/Calendar";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyCalendarArgs } from "./args/CreateManyCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class CreateManyCalendarResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCalendarArgs
  ): Promise<AffectedRowsOutput> {
    return CalendarCrudResolver.prototype.createManyCalendar(ctx, info, args);
  }
}
