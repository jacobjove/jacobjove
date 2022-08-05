import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Action } from "@/graphql/schema/generated/models/action.model";
import { MetricRecord } from "@/graphql/schema/generated/models";
import { MetricUsage } from "@/graphql/schema/generated/models";

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
