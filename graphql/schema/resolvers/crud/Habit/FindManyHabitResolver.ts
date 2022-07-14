import { ApolloContext } from "@/graphql/context";
import { HabitCrudResolver } from "@/graphql/schema/resolvers/crud/Habit/HabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Habit } from "../../../models/Habit";
import { FindManyHabitArgs } from "./args/FindManyHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class FindManyHabitResolver {
  @TypeGraphQL.Query((_returns) => [Habit], {
    nullable: false,
  })
  async habits(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyHabitArgs
  ): Promise<Habit[]> {
    return HabitCrudResolver.prototype.habits(ctx, info, args);
  }
}
