import { ApolloContext } from "@/graphql/context";
import { ActionScheduleCrudResolver } from "@/graphql/schema/resolvers/crud/ActionSchedule/ActionScheduleCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { UpsertActionScheduleArgs } from "./args/UpsertActionScheduleArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class UpsertActionScheduleResolver {
  @TypeGraphQL.Mutation((_returns) => ActionSchedule, { nullable: false })
  async upsertActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActionScheduleArgs
  ): Promise<ActionSchedule> {
    return ActionScheduleCrudResolver.prototype.upsertActionSchedule(ctx, info, args);
  }
}
