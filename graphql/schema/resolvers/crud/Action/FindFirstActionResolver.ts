import { ApolloContext } from "@/graphql/context";
import { ActionCrudResolver } from "@/graphql/schema/resolvers/crud/Action/ActionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Action } from "../../../models/Action";
import { FindFirstActionArgs } from "./args/FindFirstActionArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class FindFirstActionResolver {
  @TypeGraphQL.Query((_returns) => Action, {
    nullable: true,
  })
  async findFirstAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActionArgs
  ): Promise<Action | null> {
    return ActionCrudResolver.prototype.findFirstAction(ctx, info, args);
  }
}
