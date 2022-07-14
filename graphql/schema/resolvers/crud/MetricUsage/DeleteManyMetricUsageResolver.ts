import { ApolloContext } from "@/graphql/context";
import { MetricUsageCrudResolver } from "@/graphql/schema/resolvers/crud/MetricUsage/MetricUsageCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricUsage } from "../../../models/MetricUsage";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyMetricUsageArgs } from "./args/DeleteManyMetricUsageArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class DeleteManyMetricUsageResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMetricUsageArgs
  ): Promise<AffectedRowsOutput> {
    return MetricUsageCrudResolver.prototype.deleteManyMetricUsage(ctx, info, args);
  }
}
