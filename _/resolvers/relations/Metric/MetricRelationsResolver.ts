import { GqlContext } from "@/graphql/context";
import { Metric, MetricApplication, MetricUsage } from "@/graphql/schema/generated/models";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationsArgs } from "./args/MetricApplicationsArgs";
import { MetricUsagesArgs } from "./args/MetricUsagesArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class MetricRelationsResolver {
  @TypeGraphQL.FieldResolver(() => [MetricApplication], { nullable: false })
  async applications(
    @TypeGraphQL.Root() metric: Metric,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: MetricApplicationsArgs
  ): Promise<MetricApplication[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [MetricUsage], { nullable: false })
  async usages(
    @TypeGraphQL.Root() metric: Metric,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: MetricUsagesArgs
  ): Promise<MetricUsage[]> {
    throw new Error("Not implemented");
  }
}
