import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Act } from "../../../models/Act";
import { Metric } from "../../../models/Metric";
import { MetricApplication } from "../../../models/MetricApplication";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class MetricApplicationRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Act, { nullable: false })
  async act(
    @TypeGraphQL.Root() metricApplication: MetricApplication,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Act> {
    throw new Error("Not implemented");
    return getPrismaFromContext(ctx)
      .metricApplication.findUnique({
        where: {
          id: metricApplication.id,
        },
      })
      .act({});
  }

  @TypeGraphQL.FieldResolver(() => Metric, { nullable: false })
  async metric(
    @TypeGraphQL.Root() metricApplication: MetricApplication,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Metric> {
    throw new Error("Not implemented");
    // return MetricApplicationCrudResolver.prototype.act(ctx, info, args);
  }
}
