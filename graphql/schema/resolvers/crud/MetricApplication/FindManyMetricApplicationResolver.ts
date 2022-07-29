import { ApolloContext } from "@/graphql/context";
import { MetricApplicationCrudResolver } from "@/graphql/schema/resolvers/crud/MetricApplication/MetricApplicationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplication } from "../../../models/MetricApplication";
import { FindManyMetricApplicationArgs } from "./args/FindManyMetricApplicationArgs";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class FindManyMetricApplicationResolver {
  @TypeGraphQL.Query((_returns) => [MetricApplication], { nullable: false })
  async metricApplications(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMetricApplicationArgs
  ): Promise<MetricApplication[]> {
    return MetricApplicationCrudResolver.prototype.metricApplications(ctx, info, args);
  }
}
