import { GqlContext } from "@/graphql/context";
import { Value } from "@/graphql/schema/generated/models/value.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateValue } from "../../outputs/AggregateValue";
import { AggregateValueArgs } from "./args/AggregateValueArgs";
import { CreateManyValueArgs } from "./args/CreateManyValueArgs";
import { CreateValueArgs } from "./args/CreateValueArgs";
import { DeleteManyValueArgs } from "./args/DeleteManyValueArgs";
import { DeleteValueArgs } from "./args/DeleteValueArgs";
import { FindFirstValueArgs } from "./args/FindFirstValueArgs";
import { FindManyValueArgs } from "./args/FindManyValueArgs";
import { FindUniqueValueArgs } from "./args/FindUniqueValueArgs";
import { UpdateManyValueArgs } from "./args/UpdateManyValueArgs";
import { UpdateValueArgs } from "./args/UpdateValueArgs";
import { UpsertValueArgs } from "./args/UpsertValueArgs";

@TypeGraphQL.Resolver((_of) => Value)
export class ValueCrudResolver {
  @TypeGraphQL.Query((_returns) => Value, { nullable: true })
  async value(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueValueArgs
  ): Promise<Value | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Value, { nullable: true })
  async findFirstValue(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstValueArgs
  ): Promise<Value | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Value], { nullable: false })
  async values(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyValueArgs
  ): Promise<Value[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Value, { nullable: false })
  async createValue(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateValueArgs
  ): Promise<Value> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyValue(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyValueArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Value, { nullable: true })
  async deleteValue(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteValueArgs
  ): Promise<Value | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Value, { nullable: true })
  async updateValue(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateValueArgs
  ): Promise<Value | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyValue(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyValueArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyValue(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyValueArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Value, { nullable: false })
  async upsertValue(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertValueArgs
  ): Promise<Value> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateValue, { nullable: false })
  async aggregateValue(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateValueArgs
  ): Promise<AggregateValue> {
    throw new Error("Not implemented");
  }
}
