import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql";
import { getPrismaFromContext } from "../../../helpers";
import { Habit } from "../../../models/Habit";
import { Routine } from "../../../models/Routine";
import { RoutineHabit } from "../../../models/RoutineHabit";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class RoutineHabitRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Routine, {
    nullable: false,
  })
  async routine(
    @TypeGraphQL.Root() routineHabit: RoutineHabit,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Routine> {
    throw new Error("Not implemented");
    return getPrismaFromContext(ctx)
      .routineHabit.findUnique({
        where: {
          id: routineHabit.id,
        },
      })
      .routine({});
  }

  @TypeGraphQL.FieldResolver((_type) => Habit, {
    nullable: false,
  })
  async habit(
    @TypeGraphQL.Root() routineHabit: RoutineHabit,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Habit> {
    throw new Error("Not implemented");
  }
}
