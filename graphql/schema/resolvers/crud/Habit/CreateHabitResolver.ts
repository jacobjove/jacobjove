import { ApolloContext } from "@/graphql/context";
import { HabitCrudResolver } from "@/graphql/schema/resolvers/crud/Habit/HabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Habit } from "../../../models/Habit";
import { CreateHabitArgs } from "./args/CreateHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class CreateHabitResolver {
  @TypeGraphQL.Mutation((_returns) => Habit, {
    nullable: false,
  })
  async createHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateHabitArgs
  ): Promise<Habit> {
    return HabitCrudResolver.prototype.createHabit(ctx, info, args);
  }
}
