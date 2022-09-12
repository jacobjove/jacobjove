/* Do not edit this file. It was generated programmatically. */

import type { GqlContext } from "@web/graphql/context";
import {
  ArgsForUpdatingManyBeliefs,
  BeliefCreationArgs,
  BeliefsCreationArgs,
  BeliefUpdateArgs,
  BeliefUpsertionArgs,
  DeleteBeliefArgs,
  DeleteManyBeliefArgs,
  FindManyBeliefArgs,
  FindUniqueBeliefArgs,
} from "@web/graphql/generated/args/belief.args";
import BeliefModel from "@web/graphql/generated/models/BeliefModel";
import UserModel from "@web/graphql/generated/models/UserModel";
import Belief from "@web/graphql/generated/types/Belief";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ObjectIdScalar } from "@web/graphql/schema/scalars";
import type { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver(() => Belief)
export class BeliefResolver {
  @TypeGraphQL.FieldResolver(() => ObjectIdScalar)
  id(@TypeGraphQL.Root() belief: Belief) {
    return belief._id;
  }

  @TypeGraphQL.Query(() => Belief, { nullable: true })
  async belief(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBeliefArgs
  ): Promise<Belief | null> {
    const filter = convertFilterForMongo(args.where);
    return BeliefModel.findOne(filter);
  }

  @TypeGraphQL.Query(() => [Belief], { nullable: false })
  async beliefs(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBeliefArgs
  ): Promise<Belief[]> {
    const filter = convertFilterForMongo(args.where);
    return BeliefModel.find(filter ?? {});
  }

  @TypeGraphQL.Mutation(() => Belief)
  async createBelief(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: BeliefCreationArgs
  ) {
    const belief = await BeliefModel.create(args.data);
    if (belief) {
      // NOTE: This update fails if it's not awaited.
      await UserModel.findOneAndUpdate(
        { _id: belief.userId },
        { $push: { beliefs: { ...belief } } }
      );
    }
    return belief;
  }

  @TypeGraphQL.Mutation(() => [Belief], { nullable: false })
  async createManyBelief(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: BeliefsCreationArgs
  ): Promise<Belief[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Belief)
  async updateBelief(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: BeliefUpdateArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    const belief = await BeliefModel.findOneAndUpdate(filter, args.data, {
      returnDocument: "after",
    });
    // NOTE: This update fails if it's not awaited.
    belief &&
      (await UserModel.findOneAndUpdate(
        { _id: belief.userId, "beliefs._id": belief._id },
        {
          $set: { "beliefs.$": { ...belief } },
        }
      ));
    return belief;
  }

  @TypeGraphQL.Mutation(() => Belief)
  async upsertBelief(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: BeliefUpsertionArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    const belief = await BeliefModel.findOneAndUpdate(filter, args.data, {
      upsert: true,
      new: true,
      returnDocument: "after",
    });
    return belief;
  }

  @TypeGraphQL.Mutation(() => [Belief], { nullable: false })
  async updateBeliefs(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyBeliefs
  ): Promise<Belief[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Belief], { nullable: false })
  async updateBeliefsDistinctly(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyBeliefs
  ): Promise<Belief[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Belief, { nullable: true })
  async deleteBelief(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBeliefArgs
  ): Promise<Belief | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Belief], { nullable: false })
  async deleteManyBelief(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBeliefArgs
  ): Promise<Belief[]> {
    throw new Error("Not implemented");
  }
}
