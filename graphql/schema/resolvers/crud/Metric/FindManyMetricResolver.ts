import { ApolloContext } from "@/graphql/context";
import { MetricCrudResolver } from "@/graphql/schema/resolvers/crud/Metric/MetricCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Metric } from "../../../models/Metric";
import { FindManyMetricArgs } from "./args/FindManyMetricArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class FindManyMetricResolver {
  @TypeGraphQL.Query((_returns) => [Metric], {
    nullable: false,
  })
  async metrics(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMetricArgs
  ): Promise<Metric[]> {
    return MetricCrudResolver.prototype.metrics(ctx, info, args);
  }
}
