import { GqlContext } from "@/graphql/context";
import { Metric } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMetricArgs
  ): Promise<Metric | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Metric, { nullable: true })
  async findFirstMetric(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMetricArgs
  ): Promise<Metric | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Metric], { nullable: false })
  async metrics(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMetricArgs
  ): Promise<Metric[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Metric, { nullable: false })
  async createMetric(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMetricArgs
  ): Promise<Metric> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyMetric(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMetricArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Metric, { nullable: true })
  async deleteMetric(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMetricArgs
  ): Promise<Metric | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Metric, { nullable: true })
  async updateMetric(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMetricArgs
  ): Promise<Metric | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyMetric(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMetricArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyMetric(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMetricArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Metric, { nullable: false })
  async upsertMetric(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMetricArgs
  ): Promise<Metric> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateMetric, { nullable: false })
  async aggregateMetric(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMetricArgs
  ): Promise<AggregateMetric> {
    throw new Error("Not implemented");
  }
}
