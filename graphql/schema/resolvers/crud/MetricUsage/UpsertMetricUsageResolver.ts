import { ApolloContext } from "@/graphql/context";
import { MetricUsageCrudResolver } from "@/graphql/schema/resolvers/crud/MetricUsage/MetricUsageCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsage } from "../../../models/MetricUsage";
import { UpsertMetricUsageArgs } from "./args/UpsertMetricUsageArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class UpsertMetricUsageResolver {
  @TypeGraphQL.Mutation((_returns) => MetricUsage, { nullable: false })
  async upsertMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMetricUsageArgs
  ): Promise<MetricUsage> {
    return MetricUsageCrudResolver.prototype.upsertMetricUsage(ctx, info, args);
  }
}
