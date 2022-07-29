import { ApolloContext } from "@/graphql/context";
import { ActionScheduleCrudResolver } from "@/graphql/schema/resolvers/crud/ActionSchedule/ActionScheduleCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { FindUniqueActionScheduleArgs } from "./args/FindUniqueActionScheduleArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class FindUniqueActionScheduleResolver {
  @TypeGraphQL.Query((_returns) => ActionSchedule, { nullable: true })
  async actionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    return ActionScheduleCrudResolver.prototype.actionSchedule(ctx, info, args);
  }
}
