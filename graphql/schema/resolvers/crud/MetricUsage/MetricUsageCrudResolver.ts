import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { MetricUsage } from "../../../models/MetricUsage";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMetricUsage } from "../../outputs/AggregateMetricUsage";
import { AggregateMetricUsageArgs } from "./args/AggregateMetricUsageArgs";
import { CreateManyMetricUsageArgs } from "./args/CreateManyMetricUsageArgs";
import { CreateMetricUsageArgs } from "./args/CreateMetricUsageArgs";
import { DeleteManyMetricUsageArgs } from "./args/DeleteManyMetricUsageArgs";
import { DeleteMetricUsageArgs } from "./args/DeleteMetricUsageArgs";
import { FindFirstMetricUsageArgs } from "./args/FindFirstMetricUsageArgs";
import { FindManyMetricUsageArgs } from "./args/FindManyMetricUsageArgs";
import { FindUniqueMetricUsageArgs } from "./args/FindUniqueMetricUsageArgs";
import { UpdateManyMetricUsageArgs } from "./args/UpdateManyMetricUsageArgs";
import { UpdateMetricUsageArgs } from "./args/UpdateMetricUsageArgs";
import { UpsertMetricUsageArgs } from "./args/UpsertMetricUsageArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class MetricUsageCrudResolver {
  @TypeGraphQL.Query((_returns) => MetricUsage, { nullable: true })
  async metricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMetricUsageArgs
  ): Promise<MetricUsage | null> {
    return getPrismaFromContext(ctx).metricUsage.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => MetricUsage, { nullable: true })
  async findFirstMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMetricUsageArgs
  ): Promise<MetricUsage | null> {
    return getPrismaFromContext(ctx).metricUsage.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [MetricUsage], { nullable: false })
  async metricUsages(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMetricUsageArgs
  ): Promise<MetricUsage[]> {
    return getPrismaFromContext(ctx).metricUsage.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => MetricUsage, { nullable: false })
  async createMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMetricUsageArgs
  ): Promise<MetricUsage> {
    return getPrismaFromContext(ctx).metricUsage.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMetricUsageArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metricUsage.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => MetricUsage, { nullable: true })
  async deleteMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMetricUsageArgs
  ): Promise<MetricUsage | null> {
    return getPrismaFromContext(ctx).metricUsage.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => MetricUsage, { nullable: true })
  async updateMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMetricUsageArgs
  ): Promise<MetricUsage | null> {
    return getPrismaFromContext(ctx).metricUsage.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMetricUsageArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metricUsage.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMetricUsageArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metricUsage.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => MetricUsage, { nullable: false })
  async upsertMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMetricUsageArgs
  ): Promise<MetricUsage> {
    return getPrismaFromContext(ctx).metricUsage.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateMetricUsage, { nullable: false })
  async aggregateMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMetricUsageArgs
  ): Promise<AggregateMetricUsage> {
    return getPrismaFromContext(ctx).metricUsage.aggregate({
      ...args,
    });
  }
}
