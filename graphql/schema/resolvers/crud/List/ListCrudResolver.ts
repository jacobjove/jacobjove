import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { List } from "../../../models/List";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateList } from "../../outputs/AggregateList";
import { AggregateListArgs } from "./args/AggregateListArgs";
import { CreateListArgs } from "./args/CreateListArgs";
import { CreateManyListArgs } from "./args/CreateManyListArgs";
import { DeleteListArgs } from "./args/DeleteListArgs";
import { DeleteManyListArgs } from "./args/DeleteManyListArgs";
import { FindFirstListArgs } from "./args/FindFirstListArgs";
import { FindManyListArgs } from "./args/FindManyListArgs";
import { FindUniqueListArgs } from "./args/FindUniqueListArgs";
import { UpdateListArgs } from "./args/UpdateListArgs";
import { UpdateManyListArgs } from "./args/UpdateManyListArgs";
import { UpsertListArgs } from "./args/UpsertListArgs";

@TypeGraphQL.Resolver((_of) => List)
export class ListCrudResolver {
  @TypeGraphQL.Query((_returns) => List, { nullable: true })
  async list(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueListArgs
  ): Promise<List | null> {
    return getPrismaFromContext(ctx).list.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => List, { nullable: true })
  async findFirstList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstListArgs
  ): Promise<List | null> {
    return getPrismaFromContext(ctx).list.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [List], { nullable: false })
  async lists(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyListArgs
  ): Promise<List[]> {
    return getPrismaFromContext(ctx).list.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => List, { nullable: false })
  async createList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateListArgs
  ): Promise<List> {
    return getPrismaFromContext(ctx).list.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyListArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).list.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => List, { nullable: true })
  async deleteList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteListArgs
  ): Promise<List | null> {
    return getPrismaFromContext(ctx).list.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => List, { nullable: true })
  async updateList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateListArgs
  ): Promise<List | null> {
    return getPrismaFromContext(ctx).list.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyListArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).list.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyListArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).list.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => List, { nullable: false })
  async upsertList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertListArgs
  ): Promise<List> {
    return getPrismaFromContext(ctx).list.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateList, { nullable: false })
  async aggregateList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateListArgs
  ): Promise<AggregateList> {
    return getPrismaFromContext(ctx).list.aggregate({
      ...args,
    });
  }
}
