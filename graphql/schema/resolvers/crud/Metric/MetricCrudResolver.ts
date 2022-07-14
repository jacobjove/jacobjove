import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Metric } from "../../../models/Metric";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMetric } from "../../outputs/AggregateMetric";
import { MetricGroupBy } from "../../outputs/MetricGroupBy";
import { AggregateMetricArgs } from "./args/AggregateMetricArgs";
import { CreateManyMetricArgs } from "./args/CreateManyMetricArgs";
import { CreateMetricArgs } from "./args/CreateMetricArgs";
import { DeleteManyMetricArgs } from "./args/DeleteManyMetricArgs";
import { DeleteMetricArgs } from "./args/DeleteMetricArgs";
import { FindFirstMetricArgs } from "./args/FindFirstMetricArgs";
import { FindManyMetricArgs } from "./args/FindManyMetricArgs";
import { FindUniqueMetricArgs } from "./args/FindUniqueMetricArgs";
import { GroupByMetricArgs } from "./args/GroupByMetricArgs";
import { UpdateManyMetricArgs } from "./args/UpdateManyMetricArgs";
import { UpdateMetricArgs } from "./args/UpdateMetricArgs";
import { UpsertMetricArgs } from "./args/UpsertMetricArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class MetricCrudResolver {
  @TypeGraphQL.Query((_returns) => Metric, {
    nullable: true,
  })
  async metric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMetricArgs
  ): Promise<Metric | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metric.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Metric, {
    nullable: true,
  })
  async findFirstMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMetricArgs
  ): Promise<Metric | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metric.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Metric], {
    nullable: false,
  })
  async metrics(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMetricArgs
  ): Promise<Metric[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metric.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Metric, {
    nullable: false,
  })
  async createMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMetricArgs
  ): Promise<Metric> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metric.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMetricArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metric.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Metric, {
    nullable: true,
  })
  async deleteMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMetricArgs
  ): Promise<Metric | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metric.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Metric, {
    nullable: true,
  })
  async updateMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMetricArgs
  ): Promise<Metric | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metric.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMetricArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metric.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMetricArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metric.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Metric, {
    nullable: false,
  })
  async upsertMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMetricArgs
  ): Promise<Metric> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metric.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateMetric, {
    nullable: false,
  })
  async aggregateMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMetricArgs
  ): Promise<AggregateMetric> {
    return getPrismaFromContext(ctx).metric.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MetricGroupBy], {
    nullable: false,
  })
  async groupByMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByMetricArgs
  ): Promise<MetricGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metric.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
