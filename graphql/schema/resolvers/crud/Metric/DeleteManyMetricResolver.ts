import { ApolloContext } from "@/graphql/context";
import { MetricCrudResolver } from "@/graphql/schema/resolvers/crud/Metric/MetricCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Metric } from "../../../models/Metric";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyMetricArgs } from "./args/DeleteManyMetricArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class DeleteManyMetricResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMetricArgs
  ): Promise<AffectedRowsOutput> {
    return MetricCrudResolver.prototype.deleteManyMetric(ctx, info, args);
  }
}
