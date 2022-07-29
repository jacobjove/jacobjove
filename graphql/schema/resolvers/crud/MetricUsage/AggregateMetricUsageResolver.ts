import { ApolloContext } from "@/graphql/context";
import { MetricUsageCrudResolver } from "@/graphql/schema/resolvers/crud/MetricUsage/MetricUsageCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsage } from "../../../models/MetricUsage";
import { AggregateMetricUsage } from "../../outputs/AggregateMetricUsage";
import { AggregateMetricUsageArgs } from "./args/AggregateMetricUsageArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class AggregateMetricUsageResolver {
  @TypeGraphQL.Query((_returns) => AggregateMetricUsage, { nullable: false })
  async aggregateMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMetricUsageArgs
  ): Promise<AggregateMetricUsage> {
    return MetricUsageCrudResolver.prototype.aggregateMetricUsage(ctx, info, args);
  }
}
