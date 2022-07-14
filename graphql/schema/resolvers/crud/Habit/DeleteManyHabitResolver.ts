import { ApolloContext } from "@/graphql/context";
import { HabitCrudResolver } from "@/graphql/schema/resolvers/crud/Habit/HabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Habit } from "../../../models/Habit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyHabitArgs } from "./args/DeleteManyHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class DeleteManyHabitResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyHabitArgs
  ): Promise<AffectedRowsOutput> {
    return HabitCrudResolver.prototype.deleteManyHabit(ctx, info, args);
  }
}
