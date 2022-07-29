import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { ActionSchedule } from "../../../models/ActionSchedule";
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
import { UpdateActionScheduleArgs } from "./args/UpdateActionScheduleArgs";
import { UpdateManyActionScheduleArgs } from "./args/UpdateManyActionScheduleArgs";
import { UpsertActionScheduleArgs } from "./args/UpsertActionScheduleArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class ActionScheduleCrudResolver {
  @TypeGraphQL.Query((_returns) => ActionSchedule, { nullable: true })
  async actionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    return getPrismaFromContext(ctx).actionSchedule.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => ActionSchedule, { nullable: true })
  async findFirstActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    return getPrismaFromContext(ctx).actionSchedule.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [ActionSchedule], { nullable: false })
  async actionSchedules(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActionScheduleArgs
  ): Promise<ActionSchedule[]> {
    return getPrismaFromContext(ctx).actionSchedule.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => ActionSchedule, { nullable: false })
  async createActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActionScheduleArgs
  ): Promise<ActionSchedule> {
    return getPrismaFromContext(ctx).actionSchedule.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActionScheduleArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).actionSchedule.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => ActionSchedule, { nullable: true })
  async deleteActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    return getPrismaFromContext(ctx).actionSchedule.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => ActionSchedule, { nullable: true })
  async updateActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    return getPrismaFromContext(ctx).actionSchedule.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActionScheduleArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).actionSchedule.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActionScheduleArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).actionSchedule.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => ActionSchedule, { nullable: false })
  async upsertActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActionScheduleArgs
  ): Promise<ActionSchedule> {
    return getPrismaFromContext(ctx).actionSchedule.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateActionSchedule, { nullable: false })
  async aggregateActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActionScheduleArgs
  ): Promise<AggregateActionSchedule> {
    return getPrismaFromContext(ctx).actionSchedule.aggregate({
      ...args,
    });
  }
}
