import { ApolloContext } from "@/graphql/context";
import { MetricCrudResolver } from "@/graphql/schema/resolvers/crud/Metric/MetricCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Metric } from "../../../models/Metric";
import { AggregateMetric } from "../../outputs/AggregateMetric";
import { AggregateMetricArgs } from "./args/AggregateMetricArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class AggregateMetricResolver {
  @TypeGraphQL.Query((_returns) => AggregateMetric, { nullable: false })
  async aggregateMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMetricArgs
  ): Promise<AggregateMetric> {
    return MetricCrudResolver.prototype.aggregateMetric(ctx, info, args);
  }
}
