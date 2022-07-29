import { ApolloContext } from "@/graphql/context";
import { ActionCrudResolver } from "@/graphql/schema/resolvers/crud/Action/ActionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Action } from "../../../models/Action";
import { FindManyActionArgs } from "./args/FindManyActionArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class FindManyActionResolver {
  @TypeGraphQL.Query((_returns) => [Action], { nullable: false })
  async actions(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActionArgs
  ): Promise<Action[]> {
    return ActionCrudResolver.prototype.actions(ctx, info, args);
  }
}
