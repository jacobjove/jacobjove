import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Action } from "../../../models/Action";
import { MetricRecord } from "../../../models/MetricRecord";
import { MetricUsage } from "../../../models/MetricUsage";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class MetricRecordRelationsResolver {
  @TypeGraphQL.FieldResolver(() => MetricUsage, { nullable: false })
  async metricUsage(
    @TypeGraphQL.Root() metricRecord: MetricRecord,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<MetricUsage> {
    throw new Error("Not implemented");
    return getPrismaFromContext(ctx)
      .metricRecord.findUnique({
        where: {
          id: metricRecord.id,
        },
      })
      .metricUsage({});
  }

  @TypeGraphQL.FieldResolver(() => Action, { nullable: false })
  async action(
    @TypeGraphQL.Root() metricRecord: MetricRecord,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Action> {
    throw new Error("Not implemented");
  }
}
