import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { RoutineHabit } from "../../../models/RoutineHabit";
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
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    return getPrismaFromContext(ctx).routineHabit.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => RoutineHabit, { nullable: true })
  async findFirstRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    return getPrismaFromContext(ctx).routineHabit.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [RoutineHabit], { nullable: false })
  async routineHabits(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyRoutineHabitArgs
  ): Promise<RoutineHabit[]> {
    return getPrismaFromContext(ctx).routineHabit.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => RoutineHabit, { nullable: false })
  async createRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateRoutineHabitArgs
  ): Promise<RoutineHabit> {
    return getPrismaFromContext(ctx).routineHabit.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyRoutineHabitArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).routineHabit.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => RoutineHabit, { nullable: true })
  async deleteRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    return getPrismaFromContext(ctx).routineHabit.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => RoutineHabit, { nullable: true })
  async updateRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    return getPrismaFromContext(ctx).routineHabit.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyRoutineHabitArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).routineHabit.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyRoutineHabitArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).routineHabit.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => RoutineHabit, { nullable: false })
  async upsertRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertRoutineHabitArgs
  ): Promise<RoutineHabit> {
    return getPrismaFromContext(ctx).routineHabit.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateRoutineHabit, { nullable: false })
  async aggregateRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateRoutineHabitArgs
  ): Promise<AggregateRoutineHabit> {
    return getPrismaFromContext(ctx).routineHabit.aggregate({
      ...args,
    });
  }
}
