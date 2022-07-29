import { ApolloContext } from "@/graphql/context";
import { RoutineHabitCrudResolver } from "@/graphql/schema/resolvers/crud/RoutineHabit/RoutineHabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabit } from "../../../models/RoutineHabit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyRoutineHabitArgs } from "./args/UpdateManyRoutineHabitArgs";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class UpdateManyRoutineHabitResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyRoutineHabitArgs
  ): Promise<AffectedRowsOutput> {
    return RoutineHabitCrudResolver.prototype.updateManyRoutineHabit(ctx, info, args);
  }
}
