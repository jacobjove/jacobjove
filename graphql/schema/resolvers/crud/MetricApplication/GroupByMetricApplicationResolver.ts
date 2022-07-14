import { ApolloContext } from "@/graphql/context";
import { MetricApplicationCrudResolver } from "@/graphql/schema/resolvers/crud/MetricApplication/MetricApplicationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricApplication } from "../../../models/MetricApplication";
import { MetricApplicationGroupBy } from "../../outputs/MetricApplicationGroupBy";
import { GroupByMetricApplicationArgs } from "./args/GroupByMetricApplicationArgs";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class GroupByMetricApplicationResolver {
  @TypeGraphQL.Query((_returns) => [MetricApplicationGroupBy], {
    nullable: false,
  })
  async groupByMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByMetricApplicationArgs
  ): Promise<MetricApplicationGroupBy[]> {
    return MetricApplicationCrudResolver.prototype.groupByMetricApplication(ctx, info, args);
  }
}
