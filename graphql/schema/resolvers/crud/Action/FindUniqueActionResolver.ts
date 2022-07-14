import { ApolloContext } from "@/graphql/context";
import { ActionCrudResolver } from "@/graphql/schema/resolvers/crud/Action/ActionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Action } from "../../../models/Action";
import { FindUniqueActionArgs } from "./args/FindUniqueActionArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class FindUniqueActionResolver {
  @TypeGraphQL.Query((_returns) => Action, {
    nullable: true,
  })
  async action(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActionArgs
  ): Promise<Action | null> {
    return ActionCrudResolver.prototype.action(ctx, info, args);
  }
}
