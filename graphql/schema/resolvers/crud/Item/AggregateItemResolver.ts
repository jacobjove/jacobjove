import { ApolloContext } from "@/graphql/context";
import { ItemCrudResolver } from "@/graphql/schema/resolvers/crud/Item/ItemCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Item } from "../../../models/Item";
import { AggregateItem } from "../../outputs/AggregateItem";
import { AggregateItemArgs } from "./args/AggregateItemArgs";

@TypeGraphQL.Resolver((_of) => Item)
export class AggregateItemResolver {
  @TypeGraphQL.Query((_returns) => AggregateItem, { nullable: false })
  async aggregateItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateItemArgs
  ): Promise<AggregateItem> {
    return ItemCrudResolver.prototype.aggregateItem(ctx, info, args);
  }
}
