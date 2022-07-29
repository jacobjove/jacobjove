import { ApolloContext } from "@/graphql/context";
import { MetricCrudResolver } from "@/graphql/schema/resolvers/crud/Metric/MetricCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Metric } from "../../../models/Metric";
import { FindFirstMetricArgs } from "./args/FindFirstMetricArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class FindFirstMetricResolver {
  @TypeGraphQL.Query((_returns) => Metric, { nullable: true })
  async findFirstMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMetricArgs
  ): Promise<Metric | null> {
    return MetricCrudResolver.prototype.findFirstMetric(ctx, info, args);
  }
}
