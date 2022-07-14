import { ApolloContext } from "@/graphql/context";
import { MetricUsageCrudResolver } from "@/graphql/schema/resolvers/crud/MetricUsage/MetricUsageCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricUsage } from "../../../models/MetricUsage";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyMetricUsageArgs } from "./args/UpdateManyMetricUsageArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class UpdateManyMetricUsageResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMetricUsageArgs
  ): Promise<AffectedRowsOutput> {
    return MetricUsageCrudResolver.prototype.updateManyMetricUsage(ctx, info, args);
  }
}
