import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Item } from "../../../models/Item";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateItem } from "../../outputs/AggregateItem";
import { ItemGroupBy } from "../../outputs/ItemGroupBy";
import { AggregateItemArgs } from "./args/AggregateItemArgs";
import { CreateItemArgs } from "./args/CreateItemArgs";
import { CreateManyItemArgs } from "./args/CreateManyItemArgs";
import { DeleteItemArgs } from "./args/DeleteItemArgs";
import { DeleteManyItemArgs } from "./args/DeleteManyItemArgs";
import { FindFirstItemArgs } from "./args/FindFirstItemArgs";
import { FindManyItemArgs } from "./args/FindManyItemArgs";
import { FindUniqueItemArgs } from "./args/FindUniqueItemArgs";
import { GroupByItemArgs } from "./args/GroupByItemArgs";
import { UpdateItemArgs } from "./args/UpdateItemArgs";
import { UpdateManyItemArgs } from "./args/UpdateManyItemArgs";
import { UpsertItemArgs } from "./args/UpsertItemArgs";

@TypeGraphQL.Resolver((_of) => Item)
export class ItemCrudResolver {
  @TypeGraphQL.Query((_returns) => Item, {
    nullable: true,
  })
  async item(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueItemArgs
  ): Promise<Item | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).item.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Item, {
    nullable: true,
  })
  async findFirstItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstItemArgs
  ): Promise<Item | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).item.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Item], {
    nullable: false,
  })
  async items(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyItemArgs
  ): Promise<Item[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).item.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Item, {
    nullable: false,
  })
  async createItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateItemArgs
  ): Promise<Item> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).item.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyItemArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).item.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Item, {
    nullable: true,
  })
  async deleteItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteItemArgs
  ): Promise<Item | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).item.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Item, {
    nullable: true,
  })
  async updateItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateItemArgs
  ): Promise<Item | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).item.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyItemArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).item.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyItemArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).item.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Item, {
    nullable: false,
  })
  async upsertItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertItemArgs
  ): Promise<Item> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).item.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateItem, {
    nullable: false,
  })
  async aggregateItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateItemArgs
  ): Promise<AggregateItem> {
    return getPrismaFromContext(ctx).item.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [ItemGroupBy], {
    nullable: false,
  })
  async groupByItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByItemArgs
  ): Promise<ItemGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).item.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
