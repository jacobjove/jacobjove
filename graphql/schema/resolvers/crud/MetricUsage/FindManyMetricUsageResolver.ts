import { ApolloContext } from "@/graphql/context";
import { MetricUsageCrudResolver } from "@/graphql/schema/resolvers/crud/MetricUsage/MetricUsageCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricUsage } from "../../../models/MetricUsage";
import { FindManyMetricUsageArgs } from "./args/FindManyMetricUsageArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class FindManyMetricUsageResolver {
  @TypeGraphQL.Query((_returns) => [MetricUsage], {
    nullable: false,
  })
  async metricUsages(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMetricUsageArgs
  ): Promise<MetricUsage[]> {
    return MetricUsageCrudResolver.prototype.metricUsages(ctx, info, args);
  }
}
