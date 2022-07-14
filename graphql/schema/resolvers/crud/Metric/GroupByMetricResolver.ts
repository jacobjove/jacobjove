import { ApolloContext } from "@/graphql/context";
import { MetricCrudResolver } from "@/graphql/schema/resolvers/crud/Metric/MetricCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Metric } from "../../../models/Metric";
import { MetricGroupBy } from "../../outputs/MetricGroupBy";
import { GroupByMetricArgs } from "./args/GroupByMetricArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class GroupByMetricResolver {
  @TypeGraphQL.Query((_returns) => [MetricGroupBy], {
    nullable: false,
  })
  async groupByMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByMetricArgs
  ): Promise<MetricGroupBy[]> {
    return MetricCrudResolver.prototype.groupByMetric(ctx, info, args);
  }
}
