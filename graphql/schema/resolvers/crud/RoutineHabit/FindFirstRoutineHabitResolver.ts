import { ApolloContext } from "@/graphql/context";
import { RoutineHabitCrudResolver } from "@/graphql/schema/resolvers/crud/RoutineHabit/RoutineHabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabit } from "../../../models/RoutineHabit";
import { FindFirstRoutineHabitArgs } from "./args/FindFirstRoutineHabitArgs";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class FindFirstRoutineHabitResolver {
  @TypeGraphQL.Query((_returns) => RoutineHabit, { nullable: true })
  async findFirstRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    return RoutineHabitCrudResolver.prototype.findFirstRoutineHabit(ctx, info, args);
  }
}
