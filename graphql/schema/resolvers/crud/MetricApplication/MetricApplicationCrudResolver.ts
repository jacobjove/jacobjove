import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { MetricApplication } from "../../../models/MetricApplication";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMetricApplication } from "../../outputs/AggregateMetricApplication";
import { AggregateMetricApplicationArgs } from "./args/AggregateMetricApplicationArgs";
import { CreateManyMetricApplicationArgs } from "./args/CreateManyMetricApplicationArgs";
import { CreateMetricApplicationArgs } from "./args/CreateMetricApplicationArgs";
import { DeleteManyMetricApplicationArgs } from "./args/DeleteManyMetricApplicationArgs";
import { DeleteMetricApplicationArgs } from "./args/DeleteMetricApplicationArgs";
import { FindFirstMetricApplicationArgs } from "./args/FindFirstMetricApplicationArgs";
import { FindManyMetricApplicationArgs } from "./args/FindManyMetricApplicationArgs";
import { FindUniqueMetricApplicationArgs } from "./args/FindUniqueMetricApplicationArgs";
import { UpdateManyMetricApplicationArgs } from "./args/UpdateManyMetricApplicationArgs";
import { UpdateMetricApplicationArgs } from "./args/UpdateMetricApplicationArgs";
import { UpsertMetricApplicationArgs } from "./args/UpsertMetricApplicationArgs";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class MetricApplicationCrudResolver {
  @TypeGraphQL.Query((_returns) => MetricApplication, { nullable: true })
  async metricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMetricApplicationArgs
  ): Promise<MetricApplication | null> {
    return getPrismaFromContext(ctx).metricApplication.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => MetricApplication, { nullable: true })
  async findFirstMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMetricApplicationArgs
  ): Promise<MetricApplication | null> {
    return getPrismaFromContext(ctx).metricApplication.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [MetricApplication], { nullable: false })
  async metricApplications(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMetricApplicationArgs
  ): Promise<MetricApplication[]> {
    return getPrismaFromContext(ctx).metricApplication.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => MetricApplication, { nullable: false })
  async createMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMetricApplicationArgs
  ): Promise<MetricApplication> {
    return getPrismaFromContext(ctx).metricApplication.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMetricApplicationArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metricApplication.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => MetricApplication, { nullable: true })
  async deleteMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMetricApplicationArgs
  ): Promise<MetricApplication | null> {
    return getPrismaFromContext(ctx).metricApplication.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => MetricApplication, { nullable: true })
  async updateMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMetricApplicationArgs
  ): Promise<MetricApplication | null> {
    return getPrismaFromContext(ctx).metricApplication.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMetricApplicationArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metricApplication.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMetricApplicationArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).metricApplication.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => MetricApplication, { nullable: false })
  async upsertMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMetricApplicationArgs
  ): Promise<MetricApplication> {
    return getPrismaFromContext(ctx).metricApplication.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateMetricApplication, { nullable: false })
  async aggregateMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMetricApplicationArgs
  ): Promise<AggregateMetricApplication> {
    return getPrismaFromContext(ctx).metricApplication.aggregate({
      ...args,
    });
  }
}
