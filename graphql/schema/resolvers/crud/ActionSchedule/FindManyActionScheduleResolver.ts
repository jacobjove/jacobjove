import { ApolloContext } from "@/graphql/context";
import { ActionScheduleCrudResolver } from "@/graphql/schema/resolvers/crud/ActionSchedule/ActionScheduleCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { FindManyActionScheduleArgs } from "./args/FindManyActionScheduleArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class FindManyActionScheduleResolver {
  @TypeGraphQL.Query((_returns) => [ActionSchedule], {
    nullable: false,
  })
  async actionSchedules(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActionScheduleArgs
  ): Promise<ActionSchedule[]> {
    return ActionScheduleCrudResolver.prototype.actionSchedules(ctx, info, args);
  }
}
