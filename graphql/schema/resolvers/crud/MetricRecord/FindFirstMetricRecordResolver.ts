import { ApolloContext } from "@/graphql/context";
import { MetricRecordCrudResolver } from "@/graphql/schema/resolvers/crud/MetricRecord/MetricRecordCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricRecord } from "../../../models/MetricRecord";
import { FindFirstMetricRecordArgs } from "./args/FindFirstMetricRecordArgs";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class FindFirstMetricRecordResolver {
  @TypeGraphQL.Query((_returns) => MetricRecord, {
    nullable: true,
  })
  async findFirstMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMetricRecordArgs
  ): Promise<MetricRecord | null> {
    return MetricRecordCrudResolver.prototype.findFirstMetricRecord(ctx, info, args);
  }
}
