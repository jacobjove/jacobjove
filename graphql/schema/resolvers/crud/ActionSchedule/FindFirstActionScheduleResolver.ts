import { ApolloContext } from "@/graphql/context";
import { ActionScheduleCrudResolver } from "@/graphql/schema/resolvers/crud/ActionSchedule/ActionScheduleCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { FindFirstActionScheduleArgs } from "./args/FindFirstActionScheduleArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class FindFirstActionScheduleResolver {
  @TypeGraphQL.Query((_returns) => ActionSchedule, {
    nullable: true,
  })
  async findFirstActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    return ActionScheduleCrudResolver.prototype.findFirstActionSchedule(ctx, info, args);
  }
}
