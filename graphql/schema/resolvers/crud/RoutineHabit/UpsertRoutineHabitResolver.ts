import { ApolloContext } from "@/graphql/context";
import { RoutineHabitCrudResolver } from "@/graphql/schema/resolvers/crud/RoutineHabit/RoutineHabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabit } from "../../../models/RoutineHabit";
import { UpsertRoutineHabitArgs } from "./args/UpsertRoutineHabitArgs";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class UpsertRoutineHabitResolver {
  @TypeGraphQL.Mutation((_returns) => RoutineHabit, { nullable: false })
  async upsertRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertRoutineHabitArgs
  ): Promise<RoutineHabit> {
    return RoutineHabitCrudResolver.prototype.upsertRoutineHabit(ctx, info, args);
  }
}
