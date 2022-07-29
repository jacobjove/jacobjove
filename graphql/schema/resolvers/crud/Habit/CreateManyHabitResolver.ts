import { ApolloContext } from "@/graphql/context";
import { HabitCrudResolver } from "@/graphql/schema/resolvers/crud/Habit/HabitCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Habit } from "../../../models/Habit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyHabitArgs } from "./args/CreateManyHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class CreateManyHabitResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyHabitArgs
  ): Promise<AffectedRowsOutput> {
    return HabitCrudResolver.prototype.createManyHabit(ctx, info, args);
  }
}
