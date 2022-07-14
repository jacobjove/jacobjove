import { ApolloContext } from "@/graphql/context";
import { ItemCrudResolver } from "@/graphql/schema/resolvers/crud/Item/ItemCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Item } from "../../../models/Item";
import { FindManyItemArgs } from "./args/FindManyItemArgs";

@TypeGraphQL.Resolver((_of) => Item)
export class FindManyItemResolver {
  @TypeGraphQL.Query((_returns) => [Item], {
    nullable: false,
  })
  async items(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyItemArgs
  ): Promise<Item[]> {
    return ItemCrudResolver.prototype.items(ctx, info, args);
  }
}
