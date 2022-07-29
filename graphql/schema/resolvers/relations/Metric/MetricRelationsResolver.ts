import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Metric } from "../../../models/Metric";
import { MetricApplication } from "../../../models/MetricApplication";
import { MetricUsage } from "../../../models/MetricUsage";
import { MetricApplicationsArgs } from "./args/MetricApplicationsArgs";
import { MetricUsagesArgs } from "./args/MetricUsagesArgs";

@TypeGraphQL.Resolver((_of) => Metric)
export class MetricRelationsResolver {
  @TypeGraphQL.FieldResolver(() => [MetricApplication], { nullable: false })
  async applications(
    @TypeGraphQL.Root() metric: Metric,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: MetricApplicationsArgs
  ): Promise<MetricApplication[]> {
    throw new Error("Not implemented");
    return getPrismaFromContext(ctx)
      .metric.findUnique({
        where: {
          id: metric.id,
        },
      })
      .applications(args);
  }

  @TypeGraphQL.FieldResolver(() => [MetricUsage], { nullable: false })
  async usages(
    @TypeGraphQL.Root() metric: Metric,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: MetricUsagesArgs
  ): Promise<MetricUsage[]> {
    throw new Error("Not implemented");
  }
}
