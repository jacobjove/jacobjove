import { ApolloContext } from "@/graphql/context";
import { ItemCrudResolver } from "@/graphql/schema/resolvers/crud/Item/ItemCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Item } from "../../../models/Item";
import { DeleteItemArgs } from "./args/DeleteItemArgs";

@TypeGraphQL.Resolver((_of) => Item)
export class DeleteItemResolver {
  @TypeGraphQL.Mutation((_returns) => Item, {
    nullable: true,
  })
  async deleteItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteItemArgs
  ): Promise<Item | null> {
    return ItemCrudResolver.prototype.deleteItem(ctx, info, args);
  }
}
