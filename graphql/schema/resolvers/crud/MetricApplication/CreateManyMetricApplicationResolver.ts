import { ApolloContext } from "@/graphql/context";
import { MetricApplicationCrudResolver } from "@/graphql/schema/resolvers/crud/MetricApplication/MetricApplicationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricApplication } from "../../../models/MetricApplication";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyMetricApplicationArgs } from "./args/CreateManyMetricApplicationArgs";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class CreateManyMetricApplicationResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMetricApplicationArgs
  ): Promise<AffectedRowsOutput> {
    return MetricApplicationCrudResolver.prototype.createManyMetricApplication(ctx, info, args);
  }
}
