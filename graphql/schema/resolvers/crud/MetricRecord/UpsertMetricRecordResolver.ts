import { ApolloContext } from "@/graphql/context";
import { MetricRecordCrudResolver } from "@/graphql/schema/resolvers/crud/MetricRecord/MetricRecordCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricRecord } from "../../../models/MetricRecord";
import { UpsertMetricRecordArgs } from "./args/UpsertMetricRecordArgs";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class UpsertMetricRecordResolver {
  @TypeGraphQL.Mutation((_returns) => MetricRecord, {
    nullable: false,
  })
  async upsertMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMetricRecordArgs
  ): Promise<MetricRecord> {
    return MetricRecordCrudResolver.prototype.upsertMetricRecord(ctx, info, args);
  }
}
