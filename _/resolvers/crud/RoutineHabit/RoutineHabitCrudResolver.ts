import { GqlContext } from "@/graphql/context";
import { RoutineHabit } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRoutineHabit } from "../../outputs/AggregateRoutineHabit";
import { AggregateRoutineHabitArgs } from "./args/AggregateRoutineHabitArgs";
import { CreateManyRoutineHabitArgs } from "./args/CreateManyRoutineHabitArgs";
import { CreateRoutineHabitArgs } from "./args/CreateRoutineHabitArgs";
import { DeleteManyRoutineHabitArgs } from "./args/DeleteManyRoutineHabitArgs";
import { DeleteRoutineHabitArgs } from "./args/DeleteRoutineHabitArgs";
import { FindFirstRoutineHabitArgs } from "./args/FindFirstRoutineHabitArgs";
import { FindManyRoutineHabitArgs } from "./args/FindManyRoutineHabitArgs";
import { FindUniqueRoutineHabitArgs } from "./args/FindUniqueRoutineHabitArgs";
import { UpdateManyRoutineHabitArgs } from "./args/UpdateManyRoutineHabitArgs";
import { UpdateRoutineHabitArgs } from "./args/UpdateRoutineHabitArgs";
import { UpsertRoutineHabitArgs } from "./args/UpsertRoutineHabitArgs";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class RoutineHabitCrudResolver {
  @TypeGraphQL.Query((_returns) => RoutineHabit, { nullable: true })
  async routineHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => RoutineHabit, { nullable: true })
  async findFirstRoutineHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [RoutineHabit], { nullable: false })
  async routineHabits(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyRoutineHabitArgs
  ): Promise<RoutineHabit[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => RoutineHabit, { nullable: false })
  async createRoutineHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateRoutineHabitArgs
  ): Promise<RoutineHabit> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyRoutineHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyRoutineHabitArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => RoutineHabit, { nullable: true })
  async deleteRoutineHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => RoutineHabit, { nullable: true })
  async updateRoutineHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyRoutineHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyRoutineHabitArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyRoutineHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyRoutineHabitArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => RoutineHabit, { nullable: false })
  async upsertRoutineHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertRoutineHabitArgs
  ): Promise<RoutineHabit> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateRoutineHabit, { nullable: false })
  async aggregateRoutineHabit(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateRoutineHabitArgs
  ): Promise<AggregateRoutineHabit> {
    throw new Error("Not implemented");
  }
}
