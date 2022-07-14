import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { MetricRecord } from "../../../models/MetricRecord";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMetricRecord } from "../../outputs/AggregateMetricRecord";
import { MetricRecordGroupBy } from "../../outputs/MetricRecordGroupBy";
import { AggregateMetricRecordArgs } from "./args/AggregateMetricRecordArgs";
import { CreateManyMetricRecordArgs } from "./args/CreateManyMetricRecordArgs";
import { CreateMetricRecordArgs } from "./args/CreateMetricRecordArgs";
import { DeleteManyMetricRecordArgs } from "./args/DeleteManyMetricRecordArgs";
import { DeleteMetricRecordArgs } from "./args/DeleteMetricRecordArgs";
import { FindFirstMetricRecordArgs } from "./args/FindFirstMetricRecordArgs";
import { FindManyMetricRecordArgs } from "./args/FindManyMetricRecordArgs";
import { FindUniqueMetricRecordArgs } from "./args/FindUniqueMetricRecordArgs";
import { GroupByMetricRecordArgs } from "./args/GroupByMetricRecordArgs";
import { UpdateManyMetricRecordArgs } from "./args/UpdateManyMetricRecordArgs";
import { UpdateMetricRecordArgs } from "./args/UpdateMetricRecordArgs";
import { UpsertMetricRecordArgs } from "./args/UpsertMetricRecordArgs";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class MetricRecordCrudResolver {
  @TypeGraphQL.Query((_returns) => MetricRecord, {
    nullable: true,
  })
  async metricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMetricRecordArgs
  ): Promise<MetricRecord | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricRecord.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MetricRecord, {
    nullable: true,
  })
  async findFirstMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMetricRecordArgs
  ): Promise<MetricRecord | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricRecord.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MetricRecord], {
    nullable: false,
  })
  async metricRecords(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMetricRecordArgs
  ): Promise<MetricRecord[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricRecord.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MetricRecord, {
    nullable: false,
  })
  async createMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMetricRecordArgs
  ): Promise<MetricRecord> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricRecord.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMetricRecordArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricRecord.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MetricRecord, {
    nullable: true,
  })
  async deleteMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMetricRecordArgs
  ): Promise<MetricRecord | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricRecord.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MetricRecord, {
    nullable: true,
  })
  async updateMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMetricRecordArgs
  ): Promise<MetricRecord | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricRecord.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMetricRecordArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricRecord.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMetricRecordArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricRecord.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MetricRecord, {
    nullable: false,
  })
  async upsertMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMetricRecordArgs
  ): Promise<MetricRecord> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricRecord.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateMetricRecord, {
    nullable: false,
  })
  async aggregateMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMetricRecordArgs
  ): Promise<AggregateMetricRecord> {
    return getPrismaFromContext(ctx).metricRecord.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MetricRecordGroupBy], {
    nullable: false,
  })
  async groupByMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByMetricRecordArgs
  ): Promise<MetricRecordGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).metricRecord.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
