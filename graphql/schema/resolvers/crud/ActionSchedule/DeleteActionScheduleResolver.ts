import { ApolloContext } from "@/graphql/context";
import { ActionScheduleCrudResolver } from "@/graphql/schema/resolvers/crud/ActionSchedule/ActionScheduleCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { DeleteActionScheduleArgs } from "./args/DeleteActionScheduleArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class DeleteActionScheduleResolver {
  @TypeGraphQL.Mutation((_returns) => ActionSchedule, {
    nullable: true,
  })
  async deleteActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    return ActionScheduleCrudResolver.prototype.deleteActionSchedule(ctx, info, args);
  }
}
