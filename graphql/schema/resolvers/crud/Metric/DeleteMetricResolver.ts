import { ApolloContext } from "@/graphql/context";
import { MetricCrudResolver } from "@/graphql/schema/resolvers/crud/Metric/MetricCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Metric } from "../../../models/Metric";
import { DeleteMetricArgs } from "./args/DeleteMetricArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class DeleteMetricResolver {
  @TypeGraphQL.Mutation((_returns) => Metric, { nullable: true })
  async deleteMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMetricArgs
  ): Promise<Metric | null> {
    return MetricCrudResolver.prototype.deleteMetric(ctx, info, args);
  }
}
