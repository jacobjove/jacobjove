import { ApolloContext } from "@/graphql/context";
import { MetricUsageCrudResolver } from "@/graphql/schema/resolvers/crud/MetricUsage/MetricUsageCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricUsage } from "../../../models/MetricUsage";
import { DeleteMetricUsageArgs } from "./args/DeleteMetricUsageArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class DeleteMetricUsageResolver {
  @TypeGraphQL.Mutation((_returns) => MetricUsage, {
    nullable: true,
  })
  async deleteMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMetricUsageArgs
  ): Promise<MetricUsage | null> {
    return MetricUsageCrudResolver.prototype.deleteMetricUsage(ctx, info, args);
  }
}
