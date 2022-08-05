import { GqlContext } from "@/graphql/context";
import { List } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueListArgs
  ): Promise<List | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => List, { nullable: true })
  async findFirstList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstListArgs
  ): Promise<List | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [List], { nullable: false })
  async lists(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyListArgs
  ): Promise<List[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => List, { nullable: false })
  async createList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateListArgs
  ): Promise<List> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyListArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => List, { nullable: true })
  async deleteList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteListArgs
  ): Promise<List | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => List, { nullable: true })
  async updateList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateListArgs
  ): Promise<List | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyListArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyListArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => List, { nullable: false })
  async upsertList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertListArgs
  ): Promise<List> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateList, { nullable: false })
  async aggregateList(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateListArgs
  ): Promise<AggregateList> {
    throw new Error("Not implemented");
  }
}
