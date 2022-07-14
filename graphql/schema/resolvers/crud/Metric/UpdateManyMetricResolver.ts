import { ApolloContext } from "@/graphql/context";
import { MetricCrudResolver } from "@/graphql/schema/resolvers/crud/Metric/MetricCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Metric } from "../../../models/Metric";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyMetricArgs } from "./args/UpdateManyMetricArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class UpdateManyMetricResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMetricArgs
  ): Promise<AffectedRowsOutput> {
    return MetricCrudResolver.prototype.updateManyMetric(ctx, info, args);
  }
}
