import { ApolloContext } from "@/graphql/context";
import { ActionScheduleCrudResolver } from "@/graphql/schema/resolvers/crud/ActionSchedule/ActionScheduleCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyActionScheduleArgs } from "./args/DeleteManyActionScheduleArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class DeleteManyActionScheduleResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActionScheduleArgs
  ): Promise<AffectedRowsOutput> {
    return ActionScheduleCrudResolver.prototype.deleteManyActionSchedule(ctx, info, args);
  }
}
