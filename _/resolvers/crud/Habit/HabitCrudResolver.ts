import { GqlContext } from "@/graphql/context";
import { Habit } from "@/graphql/schema/generated/models/habit.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateHabit } from "../../outputs/AggregateHabit";
import { AggregateHabitArgs } from "./args/AggregateHabitArgs";
import { CreateHabitArgs } from "./args/CreateHabitArgs";
import { CreateManyHabitArgs } from "./args/CreateManyHabitArgs";
import { DeleteHabitArgs } from "./args/DeleteHabitArgs";
import { DeleteManyHabitArgs } from "./args/DeleteManyHabitArgs";
import { FindFirstHabitArgs } from "./args/FindFirstHabitArgs";
import { FindManyHabitArgs } from "./args/FindManyHabitArgs";
import { FindUniqueHabitArgs } from "./args/FindUniqueHabitArgs";
import { UpdateHabitArgs } from "./args/UpdateHabitArgs";
import { UpdateManyHabitArgs } from "./args/UpdateManyHabitArgs";
import { UpsertHabitArgs } from "./args/UpsertHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class HabitCrudResolver {
  @TypeGraphQL.Query((_returns) => Habit, { nullable: true })
  async habit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueHabitArgs
  ): Promise<Habit | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Habit, { nullable: true })
  async findFirstHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstHabitArgs
  ): Promise<Habit | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Habit], { nullable: false })
  async habits(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyHabitArgs
  ): Promise<Habit[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Habit, { nullable: false })
  async createHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateHabitArgs
  ): Promise<Habit> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyHabitArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Habit, { nullable: true })
  async deleteHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteHabitArgs
  ): Promise<Habit | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Habit, { nullable: true })
  async updateHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateHabitArgs
  ): Promise<Habit | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyHabitArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyHabitArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Habit, { nullable: false })
  async upsertHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertHabitArgs
  ): Promise<Habit> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateHabit, { nullable: false })
  async aggregateHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateHabitArgs
  ): Promise<AggregateHabit> {
    throw new Error("Not implemented");
  }
}
