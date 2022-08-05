import { GqlContext } from "@/graphql/context";
import { Item } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateItem } from "../../outputs/AggregateItem";
import { AggregateItemArgs } from "./args/AggregateItemArgs";
import { CreateItemArgs } from "./args/CreateItemArgs";
import { CreateManyItemArgs } from "./args/CreateManyItemArgs";
import { DeleteItemArgs } from "./args/DeleteItemArgs";
import { DeleteManyItemArgs } from "./args/DeleteManyItemArgs";
import { FindFirstItemArgs } from "./args/FindFirstItemArgs";
import { FindManyItemArgs } from "./args/FindManyItemArgs";
import { FindUniqueItemArgs } from "./args/FindUniqueItemArgs";
import { UpdateItemArgs } from "./args/UpdateItemArgs";
import { UpdateManyItemArgs } from "./args/UpdateManyItemArgs";
import { UpsertItemArgs } from "./args/UpsertItemArgs";

@TypeGraphQL.Resolver((_of) => Item)
export class ItemCrudResolver {
  @TypeGraphQL.Query((_returns) => Item, { nullable: true })
  async item(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueItemArgs
  ): Promise<Item | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Item, { nullable: true })
  async findFirstItem(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstItemArgs
  ): Promise<Item | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Item], { nullable: false })
  async items(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyItemArgs
  ): Promise<Item[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Item, { nullable: false })
  async createItem(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateItemArgs
  ): Promise<Item> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyItem(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyItemArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Item, { nullable: true })
  async deleteItem(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteItemArgs
  ): Promise<Item | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Item, { nullable: true })
  async updateItem(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateItemArgs
  ): Promise<Item | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyItem(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyItemArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyItem(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyItemArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Item, { nullable: false })
  async upsertItem(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertItemArgs
  ): Promise<Item> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateItem, { nullable: false })
  async aggregateItem(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateItemArgs
  ): Promise<AggregateItem> {
    throw new Error("Not implemented");
  }
}
