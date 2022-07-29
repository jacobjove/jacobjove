import { ApolloContext } from "@/graphql/context";
import { ActionCrudResolver } from "@/graphql/schema/resolvers/crud/Action/ActionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Action } from "../../../models/Action";
import { DeleteActionArgs } from "./args/DeleteActionArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class DeleteActionResolver {
  @TypeGraphQL.Mutation((_returns) => Action, { nullable: true })
  async deleteAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActionArgs
  ): Promise<Action | null> {
    return ActionCrudResolver.prototype.deleteAction(ctx, info, args);
  }
}
