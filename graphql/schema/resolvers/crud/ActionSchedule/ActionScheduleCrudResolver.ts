import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { ActionScheduleGroupBy } from "../../outputs/ActionScheduleGroupBy";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateActionSchedule } from "../../outputs/AggregateActionSchedule";
import { AggregateActionScheduleArgs } from "./args/AggregateActionScheduleArgs";
import { CreateActionScheduleArgs } from "./args/CreateActionScheduleArgs";
import { CreateManyActionScheduleArgs } from "./args/CreateManyActionScheduleArgs";
import { DeleteActionScheduleArgs } from "./args/DeleteActionScheduleArgs";
import { DeleteManyActionScheduleArgs } from "./args/DeleteManyActionScheduleArgs";
import { FindFirstActionScheduleArgs } from "./args/FindFirstActionScheduleArgs";
import { FindManyActionScheduleArgs } from "./args/FindManyActionScheduleArgs";
import { FindUniqueActionScheduleArgs } from "./args/FindUniqueActionScheduleArgs";
import { GroupByActionScheduleArgs } from "./args/GroupByActionScheduleArgs";
import { UpdateActionScheduleArgs } from "./args/UpdateActionScheduleArgs";
import { UpdateManyActionScheduleArgs } from "./args/UpdateManyActionScheduleArgs";
import { UpsertActionScheduleArgs } from "./args/UpsertActionScheduleArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class ActionScheduleCrudResolver {
  @TypeGraphQL.Query((_returns) => ActionSchedule, {
    nullable: true,
  })
  async actionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionSchedule.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => ActionSchedule, {
    nullable: true,
  })
  async findFirstActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionSchedule.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [ActionSchedule], {
    nullable: false,
  })
  async actionSchedules(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActionScheduleArgs
  ): Promise<ActionSchedule[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionSchedule.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => ActionSchedule, {
    nullable: false,
  })
  async createActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActionScheduleArgs
  ): Promise<ActionSchedule> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionSchedule.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActionScheduleArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionSchedule.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => ActionSchedule, {
    nullable: true,
  })
  async deleteActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionSchedule.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => ActionSchedule, {
    nullable: true,
  })
  async updateActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionSchedule.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActionScheduleArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionSchedule.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActionScheduleArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionSchedule.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => ActionSchedule, {
    nullable: false,
  })
  async upsertActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActionScheduleArgs
  ): Promise<ActionSchedule> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionSchedule.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateActionSchedule, {
    nullable: false,
  })
  async aggregateActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActionScheduleArgs
  ): Promise<AggregateActionSchedule> {
    return getPrismaFromContext(ctx).actionSchedule.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [ActionScheduleGroupBy], {
    nullable: false,
  })
  async groupByActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByActionScheduleArgs
  ): Promise<ActionScheduleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionSchedule.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
