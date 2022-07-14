import { ApolloContext } from "@/graphql/context";
import { ActionScheduleCrudResolver } from "@/graphql/schema/resolvers/crud/ActionSchedule/ActionScheduleCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyActionScheduleArgs } from "./args/UpdateManyActionScheduleArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class UpdateManyActionScheduleResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActionScheduleArgs
  ): Promise<AffectedRowsOutput> {
    return ActionScheduleCrudResolver.prototype.updateManyActionSchedule(ctx, info, args);
  }
}
