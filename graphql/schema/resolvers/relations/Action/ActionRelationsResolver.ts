import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Action } from "../../../models/Action";
import { Habit } from "../../../models/Habit";
import { MetricRecord } from "../../../models/MetricRecord";
import { ActionMetricRecordsArgs } from "./args/ActionMetricRecordsArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class ActionRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Habit, { nullable: true })
  async habit(
    @TypeGraphQL.Root() action: Action,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Habit | null> {
    return getPrismaFromContext(ctx)
      .action.findUnique({
        where: {
          id: action.id,
        },
      })
      .habit({});
  }

  @TypeGraphQL.FieldResolver(() => [MetricRecord], { nullable: false })
  async metricRecords(
    @TypeGraphQL.Root() action: Action,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: ActionMetricRecordsArgs
  ): Promise<MetricRecord[]> {
    throw new Error("Not implemented");
    // return ActionCrudResolver.prototype.habit(ctx, info, args);
  }
}
