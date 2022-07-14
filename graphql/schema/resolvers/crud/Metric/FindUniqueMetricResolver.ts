import { ApolloContext } from "@/graphql/context";
import { MetricCrudResolver } from "@/graphql/schema/resolvers/crud/Metric/MetricCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Metric } from "../../../models/Metric";
import { FindUniqueMetricArgs } from "./args/FindUniqueMetricArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class FindUniqueMetricResolver {
  @TypeGraphQL.Query((_returns) => Metric, {
    nullable: true,
  })
  async metric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMetricArgs
  ): Promise<Metric | null> {
    return MetricCrudResolver.prototype.metric(ctx, info, args);
  }
}
