import { ApolloContext } from "@/graphql/context";
import { ListCrudResolver } from "@/graphql/schema/resolvers/crud/List/ListCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { List } from "../../../models/List";
import { FindFirstListArgs } from "./args/FindFirstListArgs";

@TypeGraphQL.Resolver((_of) => List)
export class FindFirstListResolver {
  @TypeGraphQL.Query((_returns) => List, {
    nullable: true,
  })
  async findFirstList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstListArgs
  ): Promise<List | null> {
    return ListCrudResolver.prototype.findFirstList(ctx, info, args);
  }
}
