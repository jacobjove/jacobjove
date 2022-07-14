import { ApolloContext } from "@/graphql/context";
import { MetricApplicationCrudResolver } from "@/graphql/schema/resolvers/crud/MetricApplication/MetricApplicationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricApplication } from "../../../models/MetricApplication";
import { FindUniqueMetricApplicationArgs } from "./args/FindUniqueMetricApplicationArgs";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class FindUniqueMetricApplicationResolver {
  @TypeGraphQL.Query((_returns) => MetricApplication, {
    nullable: true,
  })
  async metricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMetricApplicationArgs
  ): Promise<MetricApplication | null> {
    return MetricApplicationCrudResolver.prototype.metricApplication(ctx, info, args);
  }
}
