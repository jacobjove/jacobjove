import { ApolloContext } from "@/graphql/context";
import { MetricApplicationCrudResolver } from "@/graphql/schema/resolvers/crud/MetricApplication/MetricApplicationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplication } from "../../../models/MetricApplication";
import { CreateMetricApplicationArgs } from "./args/CreateMetricApplicationArgs";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class CreateMetricApplicationResolver {
  @TypeGraphQL.Mutation((_returns) => MetricApplication, { nullable: false })
  async createMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMetricApplicationArgs
  ): Promise<MetricApplication> {
    return MetricApplicationCrudResolver.prototype.createMetricApplication(ctx, info, args);
  }
}
