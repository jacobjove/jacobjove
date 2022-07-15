import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getItem,
  getPrismaFromContext,
  getUserSubcollectionData,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Goal } from "../../../models/Goal";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGoal } from "../../outputs/AggregateGoal";
import { GoalGroupBy } from "../../outputs/GoalGroupBy";
import { AggregateGoalArgs } from "./args/AggregateGoalArgs";
import { CreateGoalArgs } from "./args/CreateGoalArgs";
import { CreateManyGoalArgs } from "./args/CreateManyGoalArgs";
import { DeleteGoalArgs } from "./args/DeleteGoalArgs";
import { DeleteManyGoalArgs } from "./args/DeleteManyGoalArgs";
import { FindFirstGoalArgs } from "./args/FindFirstGoalArgs";
import { FindManyGoalArgs } from "./args/FindManyGoalArgs";
import { FindUniqueGoalArgs } from "./args/FindUniqueGoalArgs";
import { GroupByGoalArgs } from "./args/GroupByGoalArgs";
import { UpdateGoalArgs } from "./args/UpdateGoalArgs";
import { UpdateManyGoalArgs } from "./args/UpdateManyGoalArgs";
import { UpsertGoalArgs } from "./args/UpsertGoalArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class GoalCrudResolver {
  @TypeGraphQL.Query((_returns) => Goal, {
    nullable: true,
  })
  async goal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueGoalArgs
  ): Promise<Goal | null> {
    return getItem("goals", ctx, info, args) as Promise<Goal | null>;
  }

  @TypeGraphQL.Query((_returns) => Goal, {
    nullable: true,
  })
  async findFirstGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstGoalArgs
  ): Promise<Goal | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).goal.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Goal], {
    nullable: false,
  })
  async goals(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyGoalArgs
  ): Promise<Goal[]> {
    return getUserSubcollectionData("goals", ctx, info, args) as Promise<Goal[]>;
  }

  @TypeGraphQL.Mutation((_returns) => Goal, {
    nullable: false,
  })
  async createGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateGoalArgs
  ): Promise<Goal> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).goal.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyGoalArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).goal.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Goal, {
    nullable: true,
  })
  async deleteGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteGoalArgs
  ): Promise<Goal | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).goal.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Goal, {
    nullable: true,
  })
  async updateGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateGoalArgs
  ): Promise<Goal | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).goal.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyGoalArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).goal.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyGoalArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).goal.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Goal, {
    nullable: false,
  })
  async upsertGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertGoalArgs
  ): Promise<Goal> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).goal.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateGoal, {
    nullable: false,
  })
  async aggregateGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateGoalArgs
  ): Promise<AggregateGoal> {
    return getPrismaFromContext(ctx).goal.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [GoalGroupBy], {
    nullable: false,
  })
  async groupByGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByGoalArgs
  ): Promise<GoalGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).goal.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
