import { ApolloContext } from "@/graphql/context";
import { MetricRecordCrudResolver } from "@/graphql/schema/resolvers/crud/MetricRecord/MetricRecordCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricRecord } from "../../../models/MetricRecord";
import { FindUniqueMetricRecordArgs } from "./args/FindUniqueMetricRecordArgs";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class FindUniqueMetricRecordResolver {
  @TypeGraphQL.Query((_returns) => MetricRecord, {
    nullable: true,
  })
  async metricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMetricRecordArgs
  ): Promise<MetricRecord | null> {
    return MetricRecordCrudResolver.prototype.metricRecord(ctx, info, args);
  }
}
