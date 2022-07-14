import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Belief } from "../../../models/Belief";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBelief } from "../../outputs/AggregateBelief";
import { BeliefGroupBy } from "../../outputs/BeliefGroupBy";
import { AggregateBeliefArgs } from "./args/AggregateBeliefArgs";
import { CreateBeliefArgs } from "./args/CreateBeliefArgs";
import { CreateManyBeliefArgs } from "./args/CreateManyBeliefArgs";
import { DeleteBeliefArgs } from "./args/DeleteBeliefArgs";
import { DeleteManyBeliefArgs } from "./args/DeleteManyBeliefArgs";
import { FindFirstBeliefArgs } from "./args/FindFirstBeliefArgs";
import { FindManyBeliefArgs } from "./args/FindManyBeliefArgs";
import { FindUniqueBeliefArgs } from "./args/FindUniqueBeliefArgs";
import { GroupByBeliefArgs } from "./args/GroupByBeliefArgs";
import { UpdateBeliefArgs } from "./args/UpdateBeliefArgs";
import { UpdateManyBeliefArgs } from "./args/UpdateManyBeliefArgs";
import { UpsertBeliefArgs } from "./args/UpsertBeliefArgs";

@TypeGraphQL.Resolver((_of) => Belief)
export class BeliefCrudResolver {
  @TypeGraphQL.Query((_returns) => Belief, {
    nullable: true,
  })
  async belief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBeliefArgs
  ): Promise<Belief | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).belief.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Belief, {
    nullable: true,
  })
  async findFirstBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBeliefArgs
  ): Promise<Belief | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).belief.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Belief], {
    nullable: false,
  })
  async beliefs(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBeliefArgs
  ): Promise<Belief[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).belief.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Belief, {
    nullable: false,
  })
  async createBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBeliefArgs
  ): Promise<Belief> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).belief.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBeliefArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).belief.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Belief, {
    nullable: true,
  })
  async deleteBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBeliefArgs
  ): Promise<Belief | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).belief.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Belief, {
    nullable: true,
  })
  async updateBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBeliefArgs
  ): Promise<Belief | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).belief.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBeliefArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).belief.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBeliefArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).belief.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Belief, {
    nullable: false,
  })
  async upsertBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBeliefArgs
  ): Promise<Belief> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).belief.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateBelief, {
    nullable: false,
  })
  async aggregateBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBeliefArgs
  ): Promise<AggregateBelief> {
    return getPrismaFromContext(ctx).belief.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [BeliefGroupBy], {
    nullable: false,
  })
  async groupByBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByBeliefArgs
  ): Promise<BeliefGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).belief.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
