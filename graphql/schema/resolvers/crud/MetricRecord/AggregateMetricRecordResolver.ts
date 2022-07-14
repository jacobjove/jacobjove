import { ApolloContext } from "@/graphql/context";
import { MetricRecordCrudResolver } from "@/graphql/schema/resolvers/crud/MetricRecord/MetricRecordCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricRecord } from "../../../models/MetricRecord";
import { AggregateMetricRecord } from "../../outputs/AggregateMetricRecord";
import { AggregateMetricRecordArgs } from "./args/AggregateMetricRecordArgs";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class AggregateMetricRecordResolver {
  @TypeGraphQL.Query((_returns) => AggregateMetricRecord, {
    nullable: false,
  })
  async aggregateMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMetricRecordArgs
  ): Promise<AggregateMetricRecord> {
    return MetricRecordCrudResolver.prototype.aggregateMetricRecord(ctx, info, args);
  }
}
