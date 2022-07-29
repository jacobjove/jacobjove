import { ApolloContext } from "@/graphql/context";
import { HabitCrudResolver } from "@/graphql/schema/resolvers/crud/Habit/HabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Habit } from "../../../models/Habit";
import { AggregateHabit } from "../../outputs/AggregateHabit";
import { AggregateHabitArgs } from "./args/AggregateHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class AggregateHabitResolver {
  @TypeGraphQL.Query((_returns) => AggregateHabit, { nullable: false })
  async aggregateHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateHabitArgs
  ): Promise<AggregateHabit> {
    return HabitCrudResolver.prototype.aggregateHabit(ctx, info, args);
  }
}
