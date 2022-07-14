import { ApolloContext } from "@/graphql/context";
import { MetricRecordCrudResolver } from "@/graphql/schema/resolvers/crud/MetricRecord/MetricRecordCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricRecord } from "../../../models/MetricRecord";
import { MetricRecordGroupBy } from "../../outputs/MetricRecordGroupBy";
import { GroupByMetricRecordArgs } from "./args/GroupByMetricRecordArgs";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class GroupByMetricRecordResolver {
  @TypeGraphQL.Query((_returns) => [MetricRecordGroupBy], {
    nullable: false,
  })
  async groupByMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByMetricRecordArgs
  ): Promise<MetricRecordGroupBy[]> {
    return MetricRecordCrudResolver.prototype.groupByMetricRecord(ctx, info, args);
  }
}
