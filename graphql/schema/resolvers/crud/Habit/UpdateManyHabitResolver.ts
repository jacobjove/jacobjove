import { ApolloContext } from "@/graphql/context";
import { HabitCrudResolver } from "@/graphql/schema/resolvers/crud/Habit/HabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Habit } from "../../../models/Habit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyHabitArgs } from "./args/UpdateManyHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class UpdateManyHabitResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyHabitArgs
  ): Promise<AffectedRowsOutput> {
    return HabitCrudResolver.prototype.updateManyHabit(ctx, info, args);
  }
}
