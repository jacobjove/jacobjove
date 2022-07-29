import { ApolloContext } from "@/graphql/context";
import { ItemCrudResolver } from "@/graphql/schema/resolvers/crud/Item/ItemCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Item } from "../../../models/Item";
import { FindUniqueItemArgs } from "./args/FindUniqueItemArgs";

@TypeGraphQL.Resolver((_of) => Item)
export class FindUniqueItemResolver {
  @TypeGraphQL.Query((_returns) => Item, { nullable: true })
  async item(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueItemArgs
  ): Promise<Item | null> {
    return ItemCrudResolver.prototype.item(ctx, info, args);
  }
}
