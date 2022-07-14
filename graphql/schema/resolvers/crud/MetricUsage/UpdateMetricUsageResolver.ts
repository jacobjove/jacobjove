import { ApolloContext } from "@/graphql/context";
import { MetricUsageCrudResolver } from "@/graphql/schema/resolvers/crud/MetricUsage/MetricUsageCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricUsage } from "../../../models/MetricUsage";
import { UpdateMetricUsageArgs } from "./args/UpdateMetricUsageArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class UpdateMetricUsageResolver {
  @TypeGraphQL.Mutation((_returns) => MetricUsage, {
    nullable: true,
  })
  async updateMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMetricUsageArgs
  ): Promise<MetricUsage | null> {
    return MetricUsageCrudResolver.prototype.updateMetricUsage(ctx, info, args);
  }
}
