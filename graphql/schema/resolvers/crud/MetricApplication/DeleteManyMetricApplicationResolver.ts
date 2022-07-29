import { ApolloContext } from "@/graphql/context";
import { MetricApplicationCrudResolver } from "@/graphql/schema/resolvers/crud/MetricApplication/MetricApplicationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplication } from "../../../models/MetricApplication";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyMetricApplicationArgs } from "./args/DeleteManyMetricApplicationArgs";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class DeleteManyMetricApplicationResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMetricApplicationArgs
  ): Promise<AffectedRowsOutput> {
    return MetricApplicationCrudResolver.prototype.deleteManyMetricApplication(ctx, info, args);
  }
}
