import { ApolloContext } from "@/graphql/context";
import { ItemCrudResolver } from "@/graphql/schema/resolvers/crud/Item/ItemCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Item } from "../../../models/Item";
import { UpsertItemArgs } from "./args/UpsertItemArgs";

@TypeGraphQL.Resolver((_of) => Item)
export class UpsertItemResolver {
  @TypeGraphQL.Mutation((_returns) => Item, { nullable: false })
  async upsertItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertItemArgs
  ): Promise<Item> {
    return ItemCrudResolver.prototype.upsertItem(ctx, info, args);
  }
}
