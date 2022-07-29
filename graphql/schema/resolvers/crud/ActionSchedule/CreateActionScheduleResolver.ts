import { ApolloContext } from "@/graphql/context";
import { ActionScheduleCrudResolver } from "@/graphql/schema/resolvers/crud/ActionSchedule/ActionScheduleCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { CreateActionScheduleArgs } from "./args/CreateActionScheduleArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class CreateActionScheduleResolver {
  @TypeGraphQL.Mutation((_returns) => ActionSchedule, { nullable: false })
  async createActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActionScheduleArgs
  ): Promise<ActionSchedule> {
    return ActionScheduleCrudResolver.prototype.createActionSchedule(ctx, info, args);
  }
}
