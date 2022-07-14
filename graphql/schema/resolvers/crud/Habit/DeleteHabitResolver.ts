import { ApolloContext } from "@/graphql/context";
import { HabitCrudResolver } from "@/graphql/schema/resolvers/crud/Habit/HabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Habit } from "../../../models/Habit";
import { DeleteHabitArgs } from "./args/DeleteHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class DeleteHabitResolver {
  @TypeGraphQL.Mutation((_returns) => Habit, {
    nullable: true,
  })
  async deleteHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteHabitArgs
  ): Promise<Habit | null> {
    return HabitCrudResolver.prototype.deleteHabit(ctx, info, args);
  }
}
