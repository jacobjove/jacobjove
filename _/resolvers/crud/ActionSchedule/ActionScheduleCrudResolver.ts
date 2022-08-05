import { GqlContext } from "@/graphql/context";
import { ActionSchedule } from "@/graphql/schema/generated/models/actionSchedule.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => ActionSchedule, { nullable: true })
  async findFirstActionSchedule(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [ActionSchedule], { nullable: false })
  async actionSchedules(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActionScheduleArgs
  ): Promise<ActionSchedule[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => ActionSchedule, { nullable: false })
  async createActionSchedule(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActionScheduleArgs
  ): Promise<ActionSchedule> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyActionSchedule(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActionScheduleArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => ActionSchedule, { nullable: true })
  async deleteActionSchedule(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => ActionSchedule, { nullable: true })
  async updateActionSchedule(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActionScheduleArgs
  ): Promise<ActionSchedule | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyActionSchedule(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActionScheduleArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyActionSchedule(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActionScheduleArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => ActionSchedule, { nullable: false })
  async upsertActionSchedule(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActionScheduleArgs
  ): Promise<ActionSchedule> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateActionSchedule, { nullable: false })
  async aggregateActionSchedule(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActionScheduleArgs
  ): Promise<AggregateActionSchedule> {
    throw new Error("Not implemented");
  }
}
