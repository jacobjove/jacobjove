import { ApolloContext } from "@/graphql/context";
import { MetricRecordCrudResolver } from "@/graphql/schema/resolvers/crud/MetricRecord/MetricRecordCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricRecord } from "../../../models/MetricRecord";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyMetricRecordArgs } from "./args/UpdateManyMetricRecordArgs";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class UpdateManyMetricRecordResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMetricRecordArgs
  ): Promise<AffectedRowsOutput> {
    return MetricRecordCrudResolver.prototype.updateManyMetricRecord(ctx, info, args);
  }
}
