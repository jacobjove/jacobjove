import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Belief } from "../../../models/Belief";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBelief } from "../../outputs/AggregateBelief";
import { AggregateBeliefArgs } from "./args/AggregateBeliefArgs";
import { CreateBeliefArgs } from "./args/CreateBeliefArgs";
import { CreateManyBeliefArgs } from "./args/CreateManyBeliefArgs";
import { DeleteBeliefArgs } from "./args/DeleteBeliefArgs";
import { DeleteManyBeliefArgs } from "./args/DeleteManyBeliefArgs";
import { FindFirstBeliefArgs } from "./args/FindFirstBeliefArgs";
import { FindManyBeliefArgs } from "./args/FindManyBeliefArgs";
import { FindUniqueBeliefArgs } from "./args/FindUniqueBeliefArgs";
import { UpdateBeliefArgs } from "./args/UpdateBeliefArgs";
import { UpdateManyBeliefArgs } from "./args/UpdateManyBeliefArgs";
import { UpsertBeliefArgs } from "./args/UpsertBeliefArgs";

@TypeGraphQL.Resolver((_of) => Belief)
export class BeliefCrudResolver {
  @TypeGraphQL.Query((_returns) => Belief, { nullable: true })
  async belief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBeliefArgs
  ): Promise<Belief | null> {
    return getPrismaFromContext(ctx).belief.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Belief, { nullable: true })
  async findFirstBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBeliefArgs
  ): Promise<Belief | null> {
    return getPrismaFromContext(ctx).belief.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Belief], { nullable: false })
  async beliefs(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBeliefArgs
  ): Promise<Belief[]> {
    return getPrismaFromContext(ctx).belief.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Belief, { nullable: false })
  async createBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBeliefArgs
  ): Promise<Belief> {
    return getPrismaFromContext(ctx).belief.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBeliefArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).belief.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Belief, { nullable: true })
  async deleteBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBeliefArgs
  ): Promise<Belief | null> {
    return getPrismaFromContext(ctx).belief.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Belief, { nullable: true })
  async updateBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBeliefArgs
  ): Promise<Belief | null> {
    return getPrismaFromContext(ctx).belief.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBeliefArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).belief.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBeliefArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).belief.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Belief, { nullable: false })
  async upsertBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBeliefArgs
  ): Promise<Belief> {
    return getPrismaFromContext(ctx).belief.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateBelief, { nullable: false })
  async aggregateBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBeliefArgs
  ): Promise<AggregateBelief> {
    return getPrismaFromContext(ctx).belief.aggregate({
      ...args,
    });
  }
}
