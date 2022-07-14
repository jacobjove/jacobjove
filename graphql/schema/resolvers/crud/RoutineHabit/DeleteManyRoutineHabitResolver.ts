import { ApolloContext } from "@/graphql/context";
import { RoutineHabitCrudResolver } from "@/graphql/schema/resolvers/crud/RoutineHabit/RoutineHabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { RoutineHabit } from "../../../models/RoutineHabit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyRoutineHabitArgs } from "./args/DeleteManyRoutineHabitArgs";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class DeleteManyRoutineHabitResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyRoutineHabitArgs
  ): Promise<AffectedRowsOutput> {
    return RoutineHabitCrudResolver.prototype.deleteManyRoutineHabit(ctx, info, args);
  }
}
