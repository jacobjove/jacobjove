import { ApolloContext } from "@/graphql/context";
import { MetricApplicationCrudResolver } from "@/graphql/schema/resolvers/crud/MetricApplication/MetricApplicationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricApplication } from "../../../models/MetricApplication";
import { UpsertMetricApplicationArgs } from "./args/UpsertMetricApplicationArgs";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class UpsertMetricApplicationResolver {
  @TypeGraphQL.Mutation((_returns) => MetricApplication, {
    nullable: false,
  })
  async upsertMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMetricApplicationArgs
  ): Promise<MetricApplication> {
    return MetricApplicationCrudResolver.prototype.upsertMetricApplication(ctx, info, args);
  }
}
