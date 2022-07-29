import { ApolloContext } from "@/graphql/context";
import { ListCrudResolver } from "@/graphql/schema/resolvers/crud/List/ListCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { List } from "../../../models/List";
import { FindUniqueListArgs } from "./args/FindUniqueListArgs";

@TypeGraphQL.Resolver((_of) => List)
export class FindUniqueListResolver {
  @TypeGraphQL.Query((_returns) => List, { nullable: true })
  async list(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueListArgs
  ): Promise<List | null> {
    return ListCrudResolver.prototype.list(ctx, info, args);
  }
}
