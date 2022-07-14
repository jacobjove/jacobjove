import { ApolloContext } from "@/graphql/context";
import { ItemCrudResolver } from "@/graphql/schema/resolvers/crud/Item/ItemCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Item } from "../../../models/Item";
import { ItemGroupBy } from "../../outputs/ItemGroupBy";
import { GroupByItemArgs } from "./args/GroupByItemArgs";

@TypeGraphQL.Resolver((_of) => Item)
export class GroupByItemResolver {
  @TypeGraphQL.Query((_returns) => [ItemGroupBy], {
    nullable: false,
  })
  async groupByItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByItemArgs
  ): Promise<ItemGroupBy[]> {
    return ItemCrudResolver.prototype.groupByItem(ctx, info, args);
  }
}
