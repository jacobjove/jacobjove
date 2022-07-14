import { ApolloContext } from "@/graphql/context";
import { ActionCrudResolver } from "@/graphql/schema/resolvers/crud/Action/ActionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Action } from "../../../models/Action";
import { CreateActionArgs } from "./args/CreateActionArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class CreateActionResolver {
  @TypeGraphQL.Mutation((_returns) => Action, {
    nullable: false,
  })
  async createAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActionArgs
  ): Promise<Action> {
    return ActionCrudResolver.prototype.createAction(ctx, info, args);
  }
}
