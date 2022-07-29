import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { MetricRecord } from "../../../models/MetricRecord";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMetricRecord } from "../../outputs/AggregateMetricRecord";
import { AggregateMetricRecordArgs } from "./args/AggregateMetricRecordArgs";
import { CreateManyMetricRecordArgs } from "./args/CreateManyMetricRecordArgs";
import { CreateMetricRecordArgs } from "./args/CreateMetricRecordArgs";
import { DeleteManyMetricRecordArgs } from "./args/DeleteManyMetricRecordArgs";
import { DeleteMetricRecordArgs } from "./args/DeleteMetricRecordArgs";
import { FindFirstMetricRecordArgs } from "./args/FindFirstMetricRecordArgs";
import { FindManyMetricRecordArgs } from "./args/FindManyMetricRecordArgs";
import { FindUniqueMetricRecordArgs } from "./args/FindUniqueMetricRecordArgs";
import { UpdateManyMetricRecordArgs } from "./args/UpdateManyMetricRecordArgs";
import { UpdateMetricRecordArgs } from "./args/UpdateMetricRecordArgs";
import { UpsertMetricRecordArgs } from "./args/UpsertMetricRecordArgs";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class MetricRecordCrudResolver {
  @TypeGraphQL.Query((_returns) => MetricRecord, { nullable: true })
  async metricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMetricRecordArgs
  ): Promise<MetricRecord | null> {
    return getPrismaFromContext(ctx).metricRecord.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => MetricRecord, { nullable: true })
  async findFirstMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMetricRecordArgs
  ): Promise<MetricRecord | null> {
    return getPrismaFromContext(ctx).metricRecord.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [MetricRecord], { nullable: false })
  async metricRecords(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMetricRecordArgs
  ): Promise<MetricRecord[]> {
    return getPrismaFromContext(ctx).metricRecord.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => MetricRecord, { nullable: false })
  async createMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMetricRecordArgs
  ): Promise<MetricRecord> {
    return getPrismaFromContext(ctx).metricRecord.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMetricRecordArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metricRecord.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => MetricRecord, { nullable: true })
  async deleteMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMetricRecordArgs
  ): Promise<MetricRecord | null> {
    return getPrismaFromContext(ctx).metricRecord.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => MetricRecord, { nullable: true })
  async updateMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMetricRecordArgs
  ): Promise<MetricRecord | null> {
    return getPrismaFromContext(ctx).metricRecord.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMetricRecordArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metricRecord.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMetricRecordArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metricRecord.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => MetricRecord, { nullable: false })
  async upsertMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMetricRecordArgs
  ): Promise<MetricRecord> {
    return getPrismaFromContext(ctx).metricRecord.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateMetricRecord, { nullable: false })
  async aggregateMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMetricRecordArgs
  ): Promise<AggregateMetricRecord> {
    return getPrismaFromContext(ctx).metricRecord.aggregate({
      ...args,
    });
  }
}
