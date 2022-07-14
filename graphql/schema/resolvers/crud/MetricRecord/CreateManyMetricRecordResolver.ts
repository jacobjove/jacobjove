import { ApolloContext } from "@/graphql/context";
import { MetricRecordCrudResolver } from "@/graphql/schema/resolvers/crud/MetricRecord/MetricRecordCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricRecord } from "../../../models/MetricRecord";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyMetricRecordArgs } from "./args/CreateManyMetricRecordArgs";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class CreateManyMetricRecordResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMetricRecord(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMetricRecordArgs
  ): Promise<AffectedRowsOutput> {
    return MetricRecordCrudResolver.prototype.createManyMetricRecord(ctx, info, args);
  }
}
