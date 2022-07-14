import { ApolloContext } from "@/graphql/context";
import { MetricUsageCrudResolver } from "@/graphql/schema/resolvers/crud/MetricUsage/MetricUsageCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricUsage } from "../../../models/MetricUsage";
import { CreateMetricUsageArgs } from "./args/CreateMetricUsageArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class CreateMetricUsageResolver {
  @TypeGraphQL.Mutation((_returns) => MetricUsage, {
    nullable: false,
  })
  async createMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMetricUsageArgs
  ): Promise<MetricUsage> {
    return MetricUsageCrudResolver.prototype.createMetricUsage(ctx, info, args);
  }
}
