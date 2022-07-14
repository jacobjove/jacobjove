import { ApolloContext } from "@/graphql/context";
import { MetricApplicationCrudResolver } from "@/graphql/schema/resolvers/crud/MetricApplication/MetricApplicationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricApplication } from "../../../models/MetricApplication";
import { UpdateMetricApplicationArgs } from "./args/UpdateMetricApplicationArgs";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class UpdateMetricApplicationResolver {
  @TypeGraphQL.Mutation((_returns) => MetricApplication, {
    nullable: true,
  })
  async updateMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMetricApplicationArgs
  ): Promise<MetricApplication | null> {
    return MetricApplicationCrudResolver.prototype.updateMetricApplication(ctx, info, args);
  }
}
