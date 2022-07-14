import { ApolloContext } from "@/graphql/context";
import { MetricApplicationCrudResolver } from "@/graphql/schema/resolvers/crud/MetricApplication/MetricApplicationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricApplication } from "../../../models/MetricApplication";
import { DeleteMetricApplicationArgs } from "./args/DeleteMetricApplicationArgs";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class DeleteMetricApplicationResolver {
  @TypeGraphQL.Mutation((_returns) => MetricApplication, {
    nullable: true,
  })
  async deleteMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMetricApplicationArgs
  ): Promise<MetricApplication | null> {
    return MetricApplicationCrudResolver.prototype.deleteMetricApplication(ctx, info, args);
  }
}
