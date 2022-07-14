import { ApolloContext } from "@/graphql/context";
import { HabitCrudResolver } from "@/graphql/schema/resolvers/crud/Habit/HabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Habit } from "../../../models/Habit";
import { FindFirstHabitArgs } from "./args/FindFirstHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class FindFirstHabitResolver {
  @TypeGraphQL.Query((_returns) => Habit, {
    nullable: true,
  })
  async findFirstHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstHabitArgs
  ): Promise<Habit | null> {
    return HabitCrudResolver.prototype.findFirstHabit(ctx, info, args);
  }
}
