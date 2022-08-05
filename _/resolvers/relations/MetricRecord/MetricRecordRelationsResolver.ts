import { GqlContext } from "@/graphql/context";
import { MetricRecord, MetricUsage } from "@/graphql/schema/generated/models";
import { Action } from "@/graphql/schema/generated/models/action.model";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => MetricRecord)
export class MetricRecordRelationsResolver {
  @TypeGraphQL.FieldResolver(() => MetricUsage, { nullable: false })
  async metricUsage(
    @TypeGraphQL.Root() metricRecord: MetricRecord,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<MetricUsage> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Action, { nullable: false })
  async action(
    @TypeGraphQL.Root() metricRecord: MetricRecord,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Action> {
    throw new Error("Not implemented");
  }
}
