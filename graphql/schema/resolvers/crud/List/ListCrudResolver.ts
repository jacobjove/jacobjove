import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { List } from "../../../models/List";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateList } from "../../outputs/AggregateList";
import { ListGroupBy } from "../../outputs/ListGroupBy";
import { AggregateListArgs } from "./args/AggregateListArgs";
import { CreateListArgs } from "./args/CreateListArgs";
import { CreateManyListArgs } from "./args/CreateManyListArgs";
import { DeleteListArgs } from "./args/DeleteListArgs";
import { DeleteManyListArgs } from "./args/DeleteManyListArgs";
import { FindFirstListArgs } from "./args/FindFirstListArgs";
import { FindManyListArgs } from "./args/FindManyListArgs";
import { FindUniqueListArgs } from "./args/FindUniqueListArgs";
import { GroupByListArgs } from "./args/GroupByListArgs";
import { UpdateListArgs } from "./args/UpdateListArgs";
import { UpdateManyListArgs } from "./args/UpdateManyListArgs";
import { UpsertListArgs } from "./args/UpsertListArgs";

@TypeGraphQL.Resolver((_of) => List)
export class ListCrudResolver {
  @TypeGraphQL.Query((_returns) => List, {
    nullable: true,
  })
  async list(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueListArgs
  ): Promise<List | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).list.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => List, {
    nullable: true,
  })
  async findFirstList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstListArgs
  ): Promise<List | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).list.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [List], {
    nullable: false,
  })
  async lists(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyListArgs
  ): Promise<List[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).list.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => List, {
    nullable: false,
  })
  async createList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateListArgs
  ): Promise<List> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).list.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyListArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).list.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => List, {
    nullable: true,
  })
  async deleteList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteListArgs
  ): Promise<List | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).list.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => List, {
    nullable: true,
  })
  async updateList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateListArgs
  ): Promise<List | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).list.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyListArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).list.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyListArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).list.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => List, {
    nullable: false,
  })
  async upsertList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertListArgs
  ): Promise<List> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).list.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateList, {
    nullable: false,
  })
  async aggregateList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateListArgs
  ): Promise<AggregateList> {
    return getPrismaFromContext(ctx).list.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [ListGroupBy], {
    nullable: false,
  })
  async groupByList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByListArgs
  ): Promise<ListGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).list.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
