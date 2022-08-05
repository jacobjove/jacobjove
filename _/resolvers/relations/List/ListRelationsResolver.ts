import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Item } from "@/graphql/schema/generated/models";
import { List } from "@/graphql/schema/generated/models";
import { User } from "@/graphql/schema/generated/models/user.model";
import { ListItemsArgs } from "./args/ListItemsArgs";

@TypeGraphQL.Resolver((_of) => List)
export class ListRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async owner(@TypeGraphQL.Root() list: List, @TypeGraphQL.Ctx() ctx: GqlContext): Promise<User> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Item], { nullable: false })
  async items(
    @TypeGraphQL.Root() list: List,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: ListItemsArgs
  ): Promise<Item[]> {
    throw new Error("Not implemented");
  }
}
