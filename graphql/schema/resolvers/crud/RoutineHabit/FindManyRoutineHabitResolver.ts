import { ApolloContext } from "@/graphql/context";
import { RoutineHabitCrudResolver } from "@/graphql/schema/resolvers/crud/RoutineHabit/RoutineHabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabit } from "../../../models/RoutineHabit";
import { FindManyRoutineHabitArgs } from "./args/FindManyRoutineHabitArgs";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class FindManyRoutineHabitResolver {
  @TypeGraphQL.Query((_returns) => [RoutineHabit], { nullable: false })
  async routineHabits(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyRoutineHabitArgs
  ): Promise<RoutineHabit[]> {
    return RoutineHabitCrudResolver.prototype.routineHabits(ctx, info, args);
  }
}
