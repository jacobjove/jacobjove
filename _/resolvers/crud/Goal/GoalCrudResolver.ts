import { GqlContext } from "@/graphql/context";
import { Goal } from "@/graphql/schema/generated/models/goal.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGoal } from "../../outputs/AggregateGoal";
import { AggregateGoalArgs } from "./args/AggregateGoalArgs";
import { CreateGoalArgs } from "./args/CreateGoalArgs";
import { CreateManyGoalArgs } from "./args/CreateManyGoalArgs";
import { DeleteGoalArgs } from "./args/DeleteGoalArgs";
import { DeleteManyGoalArgs } from "./args/DeleteManyGoalArgs";
import { FindFirstGoalArgs } from "./args/FindFirstGoalArgs";
import { FindManyGoalArgs } from "./args/FindManyGoalArgs";
import { FindUniqueGoalArgs } from "./args/FindUniqueGoalArgs";
import { UpdateGoalArgs } from "./args/UpdateGoalArgs";
import { UpdateManyGoalArgs } from "./args/UpdateManyGoalArgs";
import { UpsertGoalArgs } from "./args/UpsertGoalArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class GoalCrudResolver {
  @TypeGraphQL.Query((_returns) => Goal, { nullable: true })
  async goal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueGoalArgs
  ): Promise<Goal | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Goal, { nullable: true })
  async findFirstGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstGoalArgs
  ): Promise<Goal | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Goal], { nullable: false })
  async goals(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyGoalArgs
  ): Promise<Goal[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Goal, { nullable: false })
  async createGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateGoalArgs
  ): Promise<Goal> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyGoalArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Goal, { nullable: true })
  async deleteGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteGoalArgs
  ): Promise<Goal | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Goal, { nullable: true })
  async updateGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateGoalArgs
  ): Promise<Goal | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyGoalArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyGoalArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Goal, { nullable: false })
  async upsertGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertGoalArgs
  ): Promise<Goal> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateGoal, { nullable: false })
  async aggregateGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateGoalArgs
  ): Promise<AggregateGoal> {
    throw new Error("Not implemented");
  }
}
