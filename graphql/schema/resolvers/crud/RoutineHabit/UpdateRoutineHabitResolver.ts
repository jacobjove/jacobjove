import { ApolloContext } from "@/graphql/context";
import { RoutineHabitCrudResolver } from "@/graphql/schema/resolvers/crud/RoutineHabit/RoutineHabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabit } from "../../../models/RoutineHabit";
import { UpdateRoutineHabitArgs } from "./args/UpdateRoutineHabitArgs";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class UpdateRoutineHabitResolver {
  @TypeGraphQL.Mutation((_returns) => RoutineHabit, { nullable: true })
  async updateRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    return RoutineHabitCrudResolver.prototype.updateRoutineHabit(ctx, info, args);
  }
}
