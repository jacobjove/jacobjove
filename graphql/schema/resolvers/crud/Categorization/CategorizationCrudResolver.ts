import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Categorization } from "../../../models/Categorization";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCategorization } from "../../outputs/AggregateCategorization";
import { CategorizationGroupBy } from "../../outputs/CategorizationGroupBy";
import { AggregateCategorizationArgs } from "./args/AggregateCategorizationArgs";
import { CreateCategorizationArgs } from "./args/CreateCategorizationArgs";
import { CreateManyCategorizationArgs } from "./args/CreateManyCategorizationArgs";
import { DeleteCategorizationArgs } from "./args/DeleteCategorizationArgs";
import { DeleteManyCategorizationArgs } from "./args/DeleteManyCategorizationArgs";
import { FindFirstCategorizationArgs } from "./args/FindFirstCategorizationArgs";
import { FindManyCategorizationArgs } from "./args/FindManyCategorizationArgs";
import { FindUniqueCategorizationArgs } from "./args/FindUniqueCategorizationArgs";
import { GroupByCategorizationArgs } from "./args/GroupByCategorizationArgs";
import { UpdateCategorizationArgs } from "./args/UpdateCategorizationArgs";
import { UpdateManyCategorizationArgs } from "./args/UpdateManyCategorizationArgs";
import { UpsertCategorizationArgs } from "./args/UpsertCategorizationArgs";

@TypeGraphQL.Resolver((_of) => Categorization)
export class CategorizationCrudResolver {
  @TypeGraphQL.Query((_returns) => Categorization, {
    nullable: true,
  })
  async categorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCategorizationArgs
  ): Promise<Categorization | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).categorization.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Categorization, {
    nullable: true,
  })
  async findFirstCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCategorizationArgs
  ): Promise<Categorization | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).categorization.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Categorization], {
    nullable: false,
  })
  async categorizations(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCategorizationArgs
  ): Promise<Categorization[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).categorization.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Categorization, {
    nullable: false,
  })
  async createCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCategorizationArgs
  ): Promise<Categorization> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).categorization.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCategorizationArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).categorization.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Categorization, {
    nullable: true,
  })
  async deleteCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCategorizationArgs
  ): Promise<Categorization | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).categorization.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Categorization, {
    nullable: true,
  })
  async updateCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCategorizationArgs
  ): Promise<Categorization | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).categorization.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCategorizationArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).categorization.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCategorizationArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).categorization.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Categorization, {
    nullable: false,
  })
  async upsertCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCategorizationArgs
  ): Promise<Categorization> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).categorization.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateCategorization, {
    nullable: false,
  })
  async aggregateCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCategorizationArgs
  ): Promise<AggregateCategorization> {
    return getPrismaFromContext(ctx).categorization.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [CategorizationGroupBy], {
    nullable: false,
  })
  async groupByCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByCategorizationArgs
  ): Promise<CategorizationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).categorization.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
