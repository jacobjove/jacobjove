import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Act } from "@/graphql/schema/generated/models/act.model";
import { Metric } from "@/graphql/schema/generated/models";
import { MetricApplication } from "@/graphql/schema/generated/models";

@TypeGraphQL.Resolver((_of) => MetricApplication)
export class MetricApplicationRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Act, { nullable: false })
  async act(
    @TypeGraphQL.Root() metricApplication: MetricApplication,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Act> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Metric, { nullable: false })
  async metric(
    @TypeGraphQL.Root() metricApplication: MetricApplication,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Metric> {
    throw new Error("Not implemented");
  }
}
