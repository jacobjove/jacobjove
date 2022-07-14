import { ApolloContext } from "@/graphql/context";
import { MetricRecordCrudResolver } from "@/graphql/schema/resolvers/crud/MetricRecord/MetricRecordCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricRecord } from "../../../models/MetricRecord";
import { UpdateMetricRecordArgs } from "./args/UpdateMetricRecordArgs";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class UpdateMetricRecordResolver {
  @TypeGraphQL.Mutation((_returns) => MetricRecord, {
    nullable: true,
  })
  async updateMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMetricRecordArgs
  ): Promise<MetricRecord | null> {
    return MetricRecordCrudResolver.prototype.updateMetricRecord(ctx, info, args);
  }
}
