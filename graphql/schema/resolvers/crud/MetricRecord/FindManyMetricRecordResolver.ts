import { ApolloContext } from "@/graphql/context";
import { MetricRecordCrudResolver } from "@/graphql/schema/resolvers/crud/MetricRecord/MetricRecordCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricRecord } from "../../../models/MetricRecord";
import { FindManyMetricRecordArgs } from "./args/FindManyMetricRecordArgs";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class FindManyMetricRecordResolver {
  @TypeGraphQL.Query((_returns) => [MetricRecord], {
    nullable: false,
  })
  async metricRecords(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMetricRecordArgs
  ): Promise<MetricRecord[]> {
    return MetricRecordCrudResolver.prototype.metricRecords(ctx, info, args);
  }
}
