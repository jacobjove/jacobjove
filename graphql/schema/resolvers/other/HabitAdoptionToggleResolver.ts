import { ApolloContext } from "@/graphql/context";
import { toggleSelection } from "@/graphql/schema/helpers";
import { Habit } from "@/graphql/schema/models/Habit";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.Resolver((_of) => Habit)
export class HabitAdoptionToggleResolver {
  @TypeGraphQL.Mutation((_returns) => Habit, {
    nullable: false,
  })
  async toggleHabitAdoption(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("habitId", (_type) => String) habitId: string,
    @TypeGraphQL.Arg("archivedAt", { nullable: true }) archivedAt: null | Date
  ): Promise<Habit> {
    return toggleSelection("habits", ctx, info, habitId, archivedAt) as Promise<Habit>;
  }
}
