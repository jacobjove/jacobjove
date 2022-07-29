import { ApolloContext } from "@/graphql/context";
import { ActionCrudResolver } from "@/graphql/schema/resolvers/crud/Action/ActionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Action } from "../../../models/Action";
import { UpdateActionArgs } from "./args/UpdateActionArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class UpdateActionResolver {
  @TypeGraphQL.Mutation((_returns) => Action, { nullable: true })
  async updateAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActionArgs
  ): Promise<Action | null> {
    return ActionCrudResolver.prototype.updateAction(ctx, info, args);
  }
}
