import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Action } from "../../../models/Action";
import { ActionGroupBy } from "../../outputs/ActionGroupBy";
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
import { GroupByActionArgs } from "./args/GroupByActionArgs";
import { UpdateActionArgs } from "./args/UpdateActionArgs";
import { UpdateManyActionArgs } from "./args/UpdateManyActionArgs";
import { UpsertActionArgs } from "./args/UpsertActionArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class ActionCrudResolver {
  @TypeGraphQL.Query((_returns) => Action, {
    nullable: true,
  })
  async action(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActionArgs
  ): Promise<Action | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).action.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Action, {
    nullable: true,
  })
  async findFirstAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActionArgs
  ): Promise<Action | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).action.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Action], {
    nullable: false,
  })
  async actions(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActionArgs
  ): Promise<Action[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).action.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Action, {
    nullable: false,
  })
  async createAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActionArgs
  ): Promise<Action> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).action.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActionArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).action.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Action, {
    nullable: true,
  })
  async deleteAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActionArgs
  ): Promise<Action | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).action.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Action, {
    nullable: true,
  })
  async updateAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActionArgs
  ): Promise<Action | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).action.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActionArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).action.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActionArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).action.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Action, {
    nullable: false,
  })
  async upsertAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActionArgs
  ): Promise<Action> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).action.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateAction, {
    nullable: false,
  })
  async aggregateAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActionArgs
  ): Promise<AggregateAction> {
    return getPrismaFromContext(ctx).action.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [ActionGroupBy], {
    nullable: false,
  })
  async groupByAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByActionArgs
  ): Promise<ActionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).action.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
