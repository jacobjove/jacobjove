import { ApolloContext } from "@/graphql/context";
import { ItemCrudResolver } from "@/graphql/schema/resolvers/crud/Item/ItemCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Item } from "../../../models/Item";
import { UpdateItemArgs } from "./args/UpdateItemArgs";

@TypeGraphQL.Resolver((_of) => Item)
export class UpdateItemResolver {
  @TypeGraphQL.Mutation((_returns) => Item, {
    nullable: true,
  })
  async updateItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateItemArgs
  ): Promise<Item | null> {
    return ItemCrudResolver.prototype.updateItem(ctx, info, args);
  }
}
