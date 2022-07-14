import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { MetricUsage } from "../../../models/MetricUsage";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMetricUsage } from "../../outputs/AggregateMetricUsage";
import { MetricUsageGroupBy } from "../../outputs/MetricUsageGroupBy";
import { AggregateMetricUsageArgs } from "./args/AggregateMetricUsageArgs";
import { CreateManyMetricUsageArgs } from "./args/CreateManyMetricUsageArgs";
import { CreateMetricUsageArgs } from "./args/CreateMetricUsageArgs";
import { DeleteManyMetricUsageArgs } from "./args/DeleteManyMetricUsageArgs";
import { DeleteMetricUsageArgs } from "./args/DeleteMetricUsageArgs";
import { FindFirstMetricUsageArgs } from "./args/FindFirstMetricUsageArgs";
import { FindManyMetricUsageArgs } from "./args/FindManyMetricUsageArgs";
import { FindUniqueMetricUsageArgs } from "./args/FindUniqueMetricUsageArgs";
import { GroupByMetricUsageArgs } from "./args/GroupByMetricUsageArgs";
import { UpdateManyMetricUsageArgs } from "./args/UpdateManyMetricUsageArgs";
import { UpdateMetricUsageArgs } from "./args/UpdateMetricUsageArgs";
import { UpsertMetricUsageArgs } from "./args/UpsertMetricUsageArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class MetricUsageCrudResolver {
  @TypeGraphQL.Query((_returns) => MetricUsage, {
    nullable: true,
  })
  async metricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMetricUsageArgs
  ): Promise<MetricUsage | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricUsage.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MetricUsage, {
    nullable: true,
  })
  async findFirstMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMetricUsageArgs
  ): Promise<MetricUsage | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricUsage.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MetricUsage], {
    nullable: false,
  })
  async metricUsages(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMetricUsageArgs
  ): Promise<MetricUsage[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricUsage.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MetricUsage, {
    nullable: false,
  })
  async createMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMetricUsageArgs
  ): Promise<MetricUsage> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricUsage.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMetricUsageArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricUsage.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MetricUsage, {
    nullable: true,
  })
  async deleteMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMetricUsageArgs
  ): Promise<MetricUsage | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricUsage.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MetricUsage, {
    nullable: true,
  })
  async updateMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMetricUsageArgs
  ): Promise<MetricUsage | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricUsage.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMetricUsageArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricUsage.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMetricUsageArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricUsage.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MetricUsage, {
    nullable: false,
  })
  async upsertMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMetricUsageArgs
  ): Promise<MetricUsage> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricUsage.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateMetricUsage, {
    nullable: false,
  })
  async aggregateMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMetricUsageArgs
  ): Promise<AggregateMetricUsage> {
    return getPrismaFromContext(ctx).metricUsage.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MetricUsageGroupBy], {
    nullable: false,
  })
  async groupByMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByMetricUsageArgs
  ): Promise<MetricUsageGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricUsage.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
