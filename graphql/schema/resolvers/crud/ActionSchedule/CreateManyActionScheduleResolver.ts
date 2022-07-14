import { ApolloContext } from "@/graphql/context";
import { ActionScheduleCrudResolver } from "@/graphql/schema/resolvers/crud/ActionSchedule/ActionScheduleCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyActionScheduleArgs } from "./args/CreateManyActionScheduleArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class CreateManyActionScheduleResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActionScheduleArgs
  ): Promise<AffectedRowsOutput> {
    return ActionScheduleCrudResolver.prototype.createManyActionSchedule(ctx, info, args);
  }
}
