import { ApolloContext } from "@/graphql/context";
import { MetricCrudResolver } from "@/graphql/schema/resolvers/crud/Metric/MetricCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Metric } from "../../../models/Metric";
import { UpsertMetricArgs } from "./args/UpsertMetricArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class UpsertMetricResolver {
  @TypeGraphQL.Mutation((_returns) => Metric, {
    nullable: false,
  })
  async upsertMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMetricArgs
  ): Promise<Metric> {
    return MetricCrudResolver.prototype.upsertMetric(ctx, info, args);
  }
}
