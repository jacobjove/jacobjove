import { ApolloContext } from "@/graphql/context";
import { MetricUsageCrudResolver } from "@/graphql/schema/resolvers/crud/MetricUsage/MetricUsageCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsage } from "../../../models/MetricUsage";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyMetricUsageArgs } from "./args/CreateManyMetricUsageArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class CreateManyMetricUsageResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyMetricUsage(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMetricUsageArgs
  ): Promise<AffectedRowsOutput> {
    return MetricUsageCrudResolver.prototype.createManyMetricUsage(ctx, info, args);
  }
}
