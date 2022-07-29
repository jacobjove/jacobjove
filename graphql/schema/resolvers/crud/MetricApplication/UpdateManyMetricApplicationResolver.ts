import { ApolloContext } from "@/graphql/context";
import { MetricApplicationCrudResolver } from "@/graphql/schema/resolvers/crud/MetricApplication/MetricApplicationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplication } from "../../../models/MetricApplication";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyMetricApplicationArgs } from "./args/UpdateManyMetricApplicationArgs";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class UpdateManyMetricApplicationResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMetricApplicationArgs
  ): Promise<AffectedRowsOutput> {
    return MetricApplicationCrudResolver.prototype.updateManyMetricApplication(ctx, info, args);
  }
}
