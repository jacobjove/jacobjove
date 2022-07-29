import { ApolloContext } from "@/graphql/context";
import { RoutineHabitCrudResolver } from "@/graphql/schema/resolvers/crud/RoutineHabit/RoutineHabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabit } from "../../../models/RoutineHabit";
import { CreateRoutineHabitArgs } from "./args/CreateRoutineHabitArgs";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class CreateRoutineHabitResolver {
  @TypeGraphQL.Mutation((_returns) => RoutineHabit, { nullable: false })
  async createRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateRoutineHabitArgs
  ): Promise<RoutineHabit> {
    return RoutineHabitCrudResolver.prototype.createRoutineHabit(ctx, info, args);
  }
}
