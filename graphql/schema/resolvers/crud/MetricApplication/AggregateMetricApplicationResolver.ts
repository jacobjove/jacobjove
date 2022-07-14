import { ApolloContext } from "@/graphql/context";
import { MetricApplicationCrudResolver } from "@/graphql/schema/resolvers/crud/MetricApplication/MetricApplicationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricApplication } from "../../../models/MetricApplication";
import { AggregateMetricApplication } from "../../outputs/AggregateMetricApplication";
import { AggregateMetricApplicationArgs } from "./args/AggregateMetricApplicationArgs";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class AggregateMetricApplicationResolver {
  @TypeGraphQL.Query((_returns) => AggregateMetricApplication, {
    nullable: false,
  })
  async aggregateMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMetricApplicationArgs
  ): Promise<AggregateMetricApplication> {
    return MetricApplicationCrudResolver.prototype.aggregateMetricApplication(ctx, info, args);
  }
}
