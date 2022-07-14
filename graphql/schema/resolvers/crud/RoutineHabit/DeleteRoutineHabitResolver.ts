import { ApolloContext } from "@/graphql/context";
import { RoutineHabitCrudResolver } from "@/graphql/schema/resolvers/crud/RoutineHabit/RoutineHabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { RoutineHabit } from "../../../models/RoutineHabit";
import { DeleteRoutineHabitArgs } from "./args/DeleteRoutineHabitArgs";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class DeleteRoutineHabitResolver {
  @TypeGraphQL.Mutation((_returns) => RoutineHabit, {
    nullable: true,
  })
  async deleteRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    return RoutineHabitCrudResolver.prototype.deleteRoutineHabit(ctx, info, args);
  }
}
