import { ApolloContext } from "@/graphql/context";
import { MetricRecordCrudResolver } from "@/graphql/schema/resolvers/crud/MetricRecord/MetricRecordCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecord } from "../../../models/MetricRecord";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyMetricRecordArgs } from "./args/DeleteManyMetricRecordArgs";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class DeleteManyMetricRecordResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMetricRecordArgs
  ): Promise<AffectedRowsOutput> {
    return MetricRecordCrudResolver.prototype.deleteManyMetricRecord(ctx, info, args);
  }
}
