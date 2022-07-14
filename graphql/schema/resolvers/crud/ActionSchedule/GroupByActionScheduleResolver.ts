import { ApolloContext } from "@/graphql/context";
import { ActionScheduleCrudResolver } from "@/graphql/schema/resolvers/crud/ActionSchedule/ActionScheduleCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { ActionScheduleGroupBy } from "../../outputs/ActionScheduleGroupBy";
import { GroupByActionScheduleArgs } from "./args/GroupByActionScheduleArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class GroupByActionScheduleResolver {
  @TypeGraphQL.Query((_returns) => [ActionScheduleGroupBy], {
    nullable: false,
  })
  async groupByActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByActionScheduleArgs
  ): Promise<ActionScheduleGroupBy[]> {
    return ActionScheduleCrudResolver.prototype.groupByActionSchedule(ctx, info, args);
  }
}
