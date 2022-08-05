import { GqlContext } from "@/graphql/context";
import { Action } from "@/graphql/schema/generated/models/action.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAction } from "../../outputs/AggregateAction";
import { AggregateActionArgs } from "./args/AggregateActionArgs";
import { CreateActionArgs } from "./args/CreateActionArgs";
import { CreateManyActionArgs } from "./args/CreateManyActionArgs";
import { DeleteActionArgs } from "./args/DeleteActionArgs";
import { DeleteManyActionArgs } from "./args/DeleteManyActionArgs";
import { FindFirstActionArgs } from "./args/FindFirstActionArgs";
import { FindManyActionArgs } from "./args/FindManyActionArgs";
import { FindUniqueActionArgs } from "./args/FindUniqueActionArgs";
import { UpdateActionArgs } from "./args/UpdateActionArgs";
import { UpdateManyActionArgs } from "./args/UpdateManyActionArgs";
import { UpsertActionArgs } from "./args/UpsertActionArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class ActionCrudResolver {
  @TypeGraphQL.Query((_returns) => Action, { nullable: true })
  async action(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActionArgs
  ): Promise<Action | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Action, { nullable: true })
  async findFirstAction(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActionArgs
  ): Promise<Action | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Action], { nullable: false })
  async actions(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActionArgs
  ): Promise<Action[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Action, { nullable: false })
  async createAction(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActionArgs
  ): Promise<Action> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyAction(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActionArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Action, { nullable: true })
  async deleteAction(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActionArgs
  ): Promise<Action | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Action, { nullable: true })
  async updateAction(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActionArgs
  ): Promise<Action | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyAction(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActionArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyAction(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActionArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Action, { nullable: false })
  async upsertAction(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActionArgs
  ): Promise<Action> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateAction, { nullable: false })
  async aggregateAction(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActionArgs
  ): Promise<AggregateAction> {
    throw new Error("Not implemented");
  }
}
