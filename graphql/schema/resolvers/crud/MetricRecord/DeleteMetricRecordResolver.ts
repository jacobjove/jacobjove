import { ApolloContext } from "@/graphql/context";
import { MetricRecordCrudResolver } from "@/graphql/schema/resolvers/crud/MetricRecord/MetricRecordCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecord } from "../../../models/MetricRecord";
import { DeleteMetricRecordArgs } from "./args/DeleteMetricRecordArgs";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class DeleteMetricRecordResolver {
  @TypeGraphQL.Mutation((_returns) => MetricRecord, { nullable: true })
  async deleteMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMetricRecordArgs
  ): Promise<MetricRecord | null> {
    return MetricRecordCrudResolver.prototype.deleteMetricRecord(ctx, info, args);
  }
}
