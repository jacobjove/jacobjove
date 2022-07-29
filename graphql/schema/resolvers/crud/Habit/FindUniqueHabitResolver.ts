import { ApolloContext } from "@/graphql/context";
import { HabitCrudResolver } from "@/graphql/schema";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Habit } from "../../../models/Habit";
import { FindUniqueHabitArgs } from "./args/FindUniqueHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class FindUniqueHabitResolver {
  @TypeGraphQL.Query((_returns) => Habit, { nullable: true })
  async habit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueHabitArgs
  ): Promise<Habit | null> {
    return HabitCrudResolver.prototype.habit(ctx, info, args);
  }
}
