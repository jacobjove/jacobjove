import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Habit } from "../../../models/Habit";
import { Metric } from "../../../models/Metric";
import { MetricRecord } from "../../../models/MetricRecord";
import { MetricUsage } from "../../../models/MetricUsage";
import { MetricUsageRecordsArgs } from "./args/MetricUsageRecordsArgs";

@TypeGraphQL.Resolver((_of) => MetricUsage)
export class MetricUsageRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Metric, { nullable: false })
  async metric(
    @TypeGraphQL.Root() metricUsage: MetricUsage,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Metric> {
    throw new Error("Not implemented");
    return getPrismaFromContext(ctx)
      .metricUsage.findUnique({
        where: {
          id: metricUsage.id,
        },
      })
      .metric({});
  }

  @TypeGraphQL.FieldResolver(() => Habit, { nullable: false })
  async habit(
    @TypeGraphQL.Root() metricUsage: MetricUsage,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Habit> {
    return getPrismaFromContext(ctx)
      .metricUsage.findUnique({
        where: {
          id: metricUsage.id,
        },
      })
      .habit({});
  }

  @TypeGraphQL.FieldResolver(() => [MetricRecord], { nullable: false })
  async records(
    @TypeGraphQL.Root() metricUsage: MetricUsage,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: MetricUsageRecordsArgs
  ): Promise<MetricRecord[]> {
    throw new Error("Not implemented");
  }
}
