import { ApolloContext } from "@/graphql/context";
import { HabitCrudResolver } from "@/graphql/schema/resolvers/crud/Habit/HabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Habit } from "../../../models/Habit";
import { UpsertHabitArgs } from "./args/UpsertHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class UpsertHabitResolver {
  @TypeGraphQL.Mutation((_returns) => Habit, {
    nullable: false,
  })
  async upsertHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertHabitArgs
  ): Promise<Habit> {
    return HabitCrudResolver.prototype.upsertHabit(ctx, info, args);
  }
}
