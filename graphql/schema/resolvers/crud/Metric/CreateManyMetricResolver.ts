import { ApolloContext } from "@/graphql/context";
import { MetricCrudResolver } from "@/graphql/schema/resolvers/crud/Metric/MetricCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Metric } from "../../../models/Metric";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyMetricArgs } from "./args/CreateManyMetricArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class CreateManyMetricResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMetric(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMetricArgs
  ): Promise<AffectedRowsOutput> {
    return MetricCrudResolver.prototype.createManyMetric(ctx, info, args);
  }
}
