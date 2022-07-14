import { ApolloContext } from "@/graphql/context";
import { HabitCrudResolver } from "@/graphql/schema/resolvers/crud/Habit/HabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Habit } from "../../../models/Habit";
import { HabitGroupBy } from "../../outputs/HabitGroupBy";
import { GroupByHabitArgs } from "./args/GroupByHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class GroupByHabitResolver {
  @TypeGraphQL.Query((_returns) => [HabitGroupBy], {
    nullable: false,
  })
  async groupByHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByHabitArgs
  ): Promise<HabitGroupBy[]> {
    return HabitCrudResolver.prototype.groupByHabit(ctx, info, args);
  }
}
