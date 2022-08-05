import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Metric } from "@/graphql/schema/generated/models";
import { MetricApplication } from "@/graphql/schema/generated/models";
import { MetricUsage } from "@/graphql/schema/generated/models";
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
