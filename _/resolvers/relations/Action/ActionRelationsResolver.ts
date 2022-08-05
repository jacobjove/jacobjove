import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Action } from "@/graphql/schema/generated/models/action.model";
import { Habit } from "@/graphql/schema/generated/models/habit.model";
import { MetricRecord } from "@/graphql/schema/generated/models";
import { ActionMetricRecordsArgs } from "./args/ActionMetricRecordsArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class ActionRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Habit, { nullable: true })
  async habit(
    @TypeGraphQL.Root() action: Action,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Habit | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [MetricRecord], { nullable: false })
  async metricRecords(
    @TypeGraphQL.Root() action: Action,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: ActionMetricRecordsArgs
  ): Promise<MetricRecord[]> {
    throw new Error("Not implemented");
  }
}
