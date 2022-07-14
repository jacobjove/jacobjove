import { ApolloContext } from "@/graphql/context";
import { MetricUsageCrudResolver } from "@/graphql/schema/resolvers/crud/MetricUsage/MetricUsageCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricUsage } from "../../../models/MetricUsage";
import { FindUniqueMetricUsageArgs } from "./args/FindUniqueMetricUsageArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class FindUniqueMetricUsageResolver {
  @TypeGraphQL.Query((_returns) => MetricUsage, {
    nullable: true,
  })
  async metricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMetricUsageArgs
  ): Promise<MetricUsage | null> {
    return MetricUsageCrudResolver.prototype.metricUsage(ctx, info, args);
  }
}
