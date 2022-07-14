import { ApolloContext } from "@/graphql/context";
import { MetricUsageCrudResolver } from "@/graphql/schema/resolvers/crud/MetricUsage/MetricUsageCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricUsage } from "../../../models/MetricUsage";
import { FindFirstMetricUsageArgs } from "./args/FindFirstMetricUsageArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class FindFirstMetricUsageResolver {
  @TypeGraphQL.Query((_returns) => MetricUsage, {
    nullable: true,
  })
  async findFirstMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMetricUsageArgs
  ): Promise<MetricUsage | null> {
    return MetricUsageCrudResolver.prototype.findFirstMetricUsage(ctx, info, args);
  }
}
