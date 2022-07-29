import { ApolloContext } from "@/graphql/context";
import { ActionScheduleCrudResolver } from "@/graphql/schema/resolvers/crud/ActionSchedule/ActionScheduleCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { UpdateActionScheduleArgs } from "./args/UpdateActionScheduleArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class UpdateActionScheduleResolver {
  @TypeGraphQL.Mutation((_returns) => ActionSchedule, { nullable: true })
  async updateActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    return ActionScheduleCrudResolver.prototype.updateActionSchedule(ctx, info, args);
  }
}
