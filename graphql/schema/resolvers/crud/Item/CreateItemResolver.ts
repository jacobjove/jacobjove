import { ApolloContext } from "@/graphql/context";
import { ItemCrudResolver } from "@/graphql/schema/resolvers/crud/Item/ItemCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Item } from "../../../models/Item";
import { CreateItemArgs } from "./args/CreateItemArgs";

@TypeGraphQL.Resolver((_of) => Item)
export class CreateItemResolver {
  @TypeGraphQL.Mutation((_returns) => Item, { nullable: false })
  async createItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateItemArgs
  ): Promise<Item> {
    return ItemCrudResolver.prototype.createItem(ctx, info, args);
  }
}
