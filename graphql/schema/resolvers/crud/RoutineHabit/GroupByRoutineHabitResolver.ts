import { ApolloContext } from "@/graphql/context";
import { RoutineHabitCrudResolver } from "@/graphql/schema/resolvers/crud/RoutineHabit/RoutineHabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { RoutineHabit } from "../../../models/RoutineHabit";
import { RoutineHabitGroupBy } from "../../outputs/RoutineHabitGroupBy";
import { GroupByRoutineHabitArgs } from "./args/GroupByRoutineHabitArgs";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class GroupByRoutineHabitResolver {
  @TypeGraphQL.Query((_returns) => [RoutineHabitGroupBy], {
    nullable: false,
  })
  async groupByRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByRoutineHabitArgs
  ): Promise<RoutineHabitGroupBy[]> {
    return RoutineHabitCrudResolver.prototype.groupByRoutineHabit(ctx, info, args);
  }
}
