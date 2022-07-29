import { ApolloContext } from "@/graphql/context";
import { MetricCrudResolver } from "@/graphql/schema/resolvers/crud/Metric/MetricCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Metric } from "../../../models/Metric";
import { UpdateMetricArgs } from "./args/UpdateMetricArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class UpdateMetricResolver {
  @TypeGraphQL.Mutation((_returns) => Metric, { nullable: true })
  async updateMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMetricArgs
  ): Promise<Metric | null> {
    return MetricCrudResolver.prototype.updateMetric(ctx, info, args);
  }
}
