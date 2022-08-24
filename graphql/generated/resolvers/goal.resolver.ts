/* Do not edit this file. It was generated programmatically. */

import { GqlContext } from "@/graphql/context";
import {
  ArgsForUpdatingManyGoals,
  DeleteGoalArgs,
  DeleteManyGoalArgs,
  FindManyGoalArgs,
  FindUniqueGoalArgs,
  GoalCreationArgs,
  GoalsCreationArgs,
  GoalUpdateArgs,
  GoalUpsertionArgs,
} from "@/graphql/generated/args/goal.args";
import GoalModel from "@/graphql/generated/models/goal.model";
import UserModel from "@/graphql/generated/models/user.model";
import { Goal } from "@/graphql/generated/types/goal.type";
import { convertFilterForMongo } from "@/graphql/schema/helpers";
import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver(() => Goal)
export class GoalResolver {
  @TypeGraphQL.FieldResolver(() => ObjectIdScalar)
  id(@TypeGraphQL.Root() goal: Goal) {
    return goal._id;
  }

  @TypeGraphQL.Query(() => Goal, { nullable: true })
  async goal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueGoalArgs
  ): Promise<Goal | null> {
    const filter = convertFilterForMongo(args.where);
    return GoalModel.findOne(filter);
  }

  @TypeGraphQL.Query(() => [Goal], { nullable: false })
  async goals(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyGoalArgs
  ): Promise<Goal[]> {
    const filter = convertFilterForMongo(args.where);
    return GoalModel.find(filter ?? {});
  }

  @TypeGraphQL.Mutation(() => Goal)
  async createGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GoalCreationArgs
  ) {
    const goal = await GoalModel.create(args.data);
    if (goal) {
      // NOTE: This update fails if it's not awaited.
      await UserModel.findOneAndUpdate({ _id: goal.userId }, { $push: { goals: { ...goal } } });
    }
    return goal;
  }

  @TypeGraphQL.Mutation(() => [Goal], { nullable: false })
  async createManyGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GoalsCreationArgs
  ): Promise<Goal[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Goal)
  async updateGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GoalUpdateArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    const goal = await GoalModel.findOneAndUpdate(filter, args.data, { returnDocument: "after" });
    // NOTE: This update fails if it's not awaited.
    goal &&
      (await UserModel.findOneAndUpdate(
        { _id: goal.userId, "goals._id": goal._id },
        {
          $set: { "goals.$": { ...goal } },
        }
      ));
    return goal;
  }

  @TypeGraphQL.Mutation(() => Goal)
  async upsertGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GoalUpsertionArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    const goal = await GoalModel.findOneAndUpdate(filter, args.data, {
      upsert: true,
      new: true,
      returnDocument: "after",
    });
    return goal;
  }

  @TypeGraphQL.Mutation(() => [Goal], { nullable: false })
  async updateGoals(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyGoals
  ): Promise<Goal[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Goal], { nullable: false })
  async updateGoalsDistinctly(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyGoals
  ): Promise<Goal[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Goal, { nullable: true })
  async deleteGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteGoalArgs
  ): Promise<Goal | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Goal], { nullable: false })
  async deleteManyGoal(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyGoalArgs
  ): Promise<Goal[]> {
    throw new Error("Not implemented");
  }
}
