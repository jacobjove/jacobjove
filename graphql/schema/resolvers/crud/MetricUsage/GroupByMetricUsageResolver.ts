import { ApolloContext } from "@/graphql/context";
import { MetricUsageCrudResolver } from "@/graphql/schema/resolvers/crud/MetricUsage/MetricUsageCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricUsage } from "../../../models/MetricUsage";
import { MetricUsageGroupBy } from "../../outputs/MetricUsageGroupBy";
import { GroupByMetricUsageArgs } from "./args/GroupByMetricUsageArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class GroupByMetricUsageResolver {
  @TypeGraphQL.Query((_returns) => [MetricUsageGroupBy], {
    nullable: false,
  })
  async groupByMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByMetricUsageArgs
  ): Promise<MetricUsageGroupBy[]> {
    return MetricUsageCrudResolver.prototype.groupByMetricUsage(ctx, info, args);
  }
}
