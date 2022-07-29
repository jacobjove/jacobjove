import { ApolloContext } from "@/graphql/context";
import { RoutineHabitCrudResolver } from "@/graphql/schema/resolvers/crud/RoutineHabit/RoutineHabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabit } from "../../../models/RoutineHabit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyRoutineHabitArgs } from "./args/CreateManyRoutineHabitArgs";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class CreateManyRoutineHabitResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyRoutineHabitArgs
  ): Promise<AffectedRowsOutput> {
    return RoutineHabitCrudResolver.prototype.createManyRoutineHabit(ctx, info, args);
  }
}
