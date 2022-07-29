import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Action } from "../../../models/Action";
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
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActionArgs
  ): Promise<Action | null> {
    return getPrismaFromContext(ctx).action.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Action, { nullable: true })
  async findFirstAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActionArgs
  ): Promise<Action | null> {
    return getPrismaFromContext(ctx).action.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Action], { nullable: false })
  async actions(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActionArgs
  ): Promise<Action[]> {
    return getPrismaFromContext(ctx).action.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Action, { nullable: false })
  async createAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActionArgs
  ): Promise<Action> {
    return getPrismaFromContext(ctx).action.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActionArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).action.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Action, { nullable: true })
  async deleteAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActionArgs
  ): Promise<Action | null> {
    return getPrismaFromContext(ctx).action.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Action, { nullable: true })
  async updateAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActionArgs
  ): Promise<Action | null> {
    return getPrismaFromContext(ctx).action.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActionArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).action.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActionArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).action.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Action, { nullable: false })
  async upsertAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActionArgs
  ): Promise<Action> {
    return getPrismaFromContext(ctx).action.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateAction, { nullable: false })
  async aggregateAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActionArgs
  ): Promise<AggregateAction> {
    return getPrismaFromContext(ctx).action.aggregate({
      ...args,
    });
  }
}
