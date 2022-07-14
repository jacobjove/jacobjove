import { ApolloContext } from "@/graphql/context";
import { RoutineHabitCrudResolver } from "@/graphql/schema/resolvers/crud/RoutineHabit/RoutineHabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { RoutineHabit } from "../../../models/RoutineHabit";
import { AggregateRoutineHabit } from "../../outputs/AggregateRoutineHabit";
import { AggregateRoutineHabitArgs } from "./args/AggregateRoutineHabitArgs";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class AggregateRoutineHabitResolver {
  @TypeGraphQL.Query((_returns) => AggregateRoutineHabit, {
    nullable: false,
  })
  async aggregateRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateRoutineHabitArgs
  ): Promise<AggregateRoutineHabit> {
    return RoutineHabitCrudResolver.prototype.aggregateRoutineHabit(ctx, info, args);
  }
}
