import { ApolloContext } from "@/graphql/context";
import { MetricApplicationCrudResolver } from "@/graphql/schema/resolvers/crud/MetricApplication/MetricApplicationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { MetricApplication } from "../../../models/MetricApplication";
import { FindFirstMetricApplicationArgs } from "./args/FindFirstMetricApplicationArgs";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class FindFirstMetricApplicationResolver {
  @TypeGraphQL.Query((_returns) => MetricApplication, {
    nullable: true,
  })
  async findFirstMetricApplication(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMetricApplicationArgs
  ): Promise<MetricApplication | null> {
    return MetricApplicationCrudResolver.prototype.findFirstMetricApplication(ctx, info, args);
  }
}
