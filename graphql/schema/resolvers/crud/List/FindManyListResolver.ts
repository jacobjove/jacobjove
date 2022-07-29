import { ApolloContext } from "@/graphql/context";
import { ListCrudResolver } from "@/graphql/schema/resolvers/crud/List/ListCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { List } from "../../../models/List";
import { FindManyListArgs } from "./args/FindManyListArgs";

@TypeGraphQL.Resolver((_of) => List)
export class FindManyListResolver {
  @TypeGraphQL.Query((_returns) => [List], { nullable: false })
  async lists(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyListArgs
  ): Promise<List[]> {
    return ListCrudResolver.prototype.lists(ctx, info, args);
  }
}
