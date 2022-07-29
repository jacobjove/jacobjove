import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Metric } from "../../../models/Metric";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMetric } from "../../outputs/AggregateMetric";
import { AggregateMetricArgs } from "./args/AggregateMetricArgs";
import { CreateManyMetricArgs } from "./args/CreateManyMetricArgs";
import { CreateMetricArgs } from "./args/CreateMetricArgs";
import { DeleteManyMetricArgs } from "./args/DeleteManyMetricArgs";
import { DeleteMetricArgs } from "./args/DeleteMetricArgs";
import { FindFirstMetricArgs } from "./args/FindFirstMetricArgs";
import { FindManyMetricArgs } from "./args/FindManyMetricArgs";
import { FindUniqueMetricArgs } from "./args/FindUniqueMetricArgs";
import { UpdateManyMetricArgs } from "./args/UpdateManyMetricArgs";
import { UpdateMetricArgs } from "./args/UpdateMetricArgs";
import { UpsertMetricArgs } from "./args/UpsertMetricArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class MetricCrudResolver {
  @TypeGraphQL.Query((_returns) => Metric, { nullable: true })
  async metric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMetricArgs
  ): Promise<Metric | null> {
    return getPrismaFromContext(ctx).metric.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Metric, { nullable: true })
  async findFirstMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMetricArgs
  ): Promise<Metric | null> {
    return getPrismaFromContext(ctx).metric.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Metric], { nullable: false })
  async metrics(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMetricArgs
  ): Promise<Metric[]> {
    return getPrismaFromContext(ctx).metric.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Metric, { nullable: false })
  async createMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMetricArgs
  ): Promise<Metric> {
    return getPrismaFromContext(ctx).metric.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMetricArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metric.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Metric, { nullable: true })
  async deleteMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMetricArgs
  ): Promise<Metric | null> {
    return getPrismaFromContext(ctx).metric.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Metric, { nullable: true })
  async updateMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMetricArgs
  ): Promise<Metric | null> {
    return getPrismaFromContext(ctx).metric.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMetricArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metric.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMetricArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metric.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Metric, { nullable: false })
  async upsertMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMetricArgs
  ): Promise<Metric> {
    return getPrismaFromContext(ctx).metric.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateMetric, { nullable: false })
  async aggregateMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMetricArgs
  ): Promise<AggregateMetric> {
    return getPrismaFromContext(ctx).metric.aggregate({
      ...args,
    });
  }
}
