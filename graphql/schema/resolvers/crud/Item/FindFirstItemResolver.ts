import { ApolloContext } from "@/graphql/context";
import { ItemCrudResolver } from "@/graphql/schema/resolvers/crud/Item/ItemCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Item } from "../../../models/Item";
import { FindFirstItemArgs } from "./args/FindFirstItemArgs";

@TypeGraphQL.Resolver((_of) => Item)
export class FindFirstItemResolver {
  @TypeGraphQL.Query((_returns) => Item, {
    nullable: true,
  })
  async findFirstItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstItemArgs
  ): Promise<Item | null> {
    return ItemCrudResolver.prototype.findFirstItem(ctx, info, args);
  }
}
