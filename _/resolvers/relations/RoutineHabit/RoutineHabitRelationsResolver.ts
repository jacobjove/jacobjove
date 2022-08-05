import { GqlContext } from "@/graphql/context";
import { Routine, RoutineHabit } from "@/graphql/schema/generated/models";
import { Habit } from "@/graphql/schema/generated/models/habit.model";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class RoutineHabitRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Routine, { nullable: false })
  async routine(
    @TypeGraphQL.Root() routineHabit: RoutineHabit,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Routine> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Habit, { nullable: false })
  async habit(
    @TypeGraphQL.Root() routineHabit: RoutineHabit,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Habit> {
    throw new Error("Not implemented");
  }
}
