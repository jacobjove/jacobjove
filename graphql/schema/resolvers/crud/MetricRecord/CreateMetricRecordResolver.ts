import { ApolloContext } from "@/graphql/context";
import { MetricRecordCrudResolver } from "@/graphql/schema/resolvers/crud/MetricRecord/MetricRecordCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecord } from "../../../models/MetricRecord";
import { CreateMetricRecordArgs } from "./args/CreateMetricRecordArgs";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class CreateMetricRecordResolver {
  @TypeGraphQL.Mutation((_returns) => MetricRecord, { nullable: false })
  async createMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMetricRecordArgs
  ): Promise<MetricRecord> {
    return MetricRecordCrudResolver.prototype.createMetricRecord(ctx, info, args);
  }
}
