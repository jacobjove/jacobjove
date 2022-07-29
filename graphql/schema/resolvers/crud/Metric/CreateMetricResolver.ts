import { ApolloContext } from "@/graphql/context";
import { MetricCrudResolver } from "@/graphql/schema/resolvers/crud/Metric/MetricCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Metric } from "../../../models/Metric";
import { CreateMetricArgs } from "./args/CreateMetricArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class CreateMetricResolver {
  @TypeGraphQL.Mutation((_returns) => Metric, { nullable: false })
  async createMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMetricArgs
  ): Promise<Metric> {
    return MetricCrudResolver.prototype.createMetric(ctx, info, args);
  }
}
