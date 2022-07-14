import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Value } from "../../../models/Value";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateValue } from "../../outputs/AggregateValue";
import { ValueGroupBy } from "../../outputs/ValueGroupBy";
import { AggregateValueArgs } from "./args/AggregateValueArgs";
import { CreateManyValueArgs } from "./args/CreateManyValueArgs";
import { CreateValueArgs } from "./args/CreateValueArgs";
import { DeleteManyValueArgs } from "./args/DeleteManyValueArgs";
import { DeleteValueArgs } from "./args/DeleteValueArgs";
import { FindFirstValueArgs } from "./args/FindFirstValueArgs";
import { FindManyValueArgs } from "./args/FindManyValueArgs";
import { FindUniqueValueArgs } from "./args/FindUniqueValueArgs";
import { GroupByValueArgs } from "./args/GroupByValueArgs";
import { UpdateManyValueArgs } from "./args/UpdateManyValueArgs";
import { UpdateValueArgs } from "./args/UpdateValueArgs";
import { UpsertValueArgs } from "./args/UpsertValueArgs";

@TypeGraphQL.Resolver((_of) => Value)
export class ValueCrudResolver {
  @TypeGraphQL.Query((_returns) => Value, {
    nullable: true,
  })
  async value(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueValueArgs
  ): Promise<Value | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).value.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Value, {
    nullable: true,
  })
  async findFirstValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstValueArgs
  ): Promise<Value | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).value.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Value], {
    nullable: false,
  })
  async values(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyValueArgs
  ): Promise<Value[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).value.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Value, {
    nullable: false,
  })
  async createValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateValueArgs
  ): Promise<Value> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).value.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyValueArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).value.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Value, {
    nullable: true,
  })
  async deleteValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteValueArgs
  ): Promise<Value | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).value.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Value, {
    nullable: true,
  })
  async updateValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateValueArgs
  ): Promise<Value | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).value.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyValueArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).value.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyValueArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).value.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Value, {
    nullable: false,
  })
  async upsertValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertValueArgs
  ): Promise<Value> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).value.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateValue, {
    nullable: false,
  })
  async aggregateValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateValueArgs
  ): Promise<AggregateValue> {
    return getPrismaFromContext(ctx).value.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [ValueGroupBy], {
    nullable: false,
  })
  async groupByValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByValueArgs
  ): Promise<ValueGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).value.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
