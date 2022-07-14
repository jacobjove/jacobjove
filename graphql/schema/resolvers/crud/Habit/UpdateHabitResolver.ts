import { ApolloContext } from "@/graphql/context";
import { HabitCrudResolver } from "@/graphql/schema/resolvers/crud/Habit/HabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Habit } from "../../../models/Habit";
import { UpdateHabitArgs } from "./args/UpdateHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class UpdateHabitResolver {
  @TypeGraphQL.Mutation((_returns) => Habit, {
    nullable: true,
  })
  async updateHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateHabitArgs
  ): Promise<Habit | null> {
    return HabitCrudResolver.prototype.updateHabit(ctx, info, args);
  }
}
