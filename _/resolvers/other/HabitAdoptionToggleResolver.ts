import { GqlContext } from "@/graphql/context";
import { Habit } from "@/graphql/schema/generated/models/habit.model";
import { toggleSelection } from "@/graphql/schema/helpers";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => Habit)
export class HabitAdoptionToggleResolver {
  @TypeGraphQL.Mutation((_returns) => Habit, { nullable: false })
  async toggleHabitAdoption(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("habitId", () => String) habitId: string,
    @TypeGraphQL.Arg("archivedAt", { nullable: true }) archivedAt: null | Date
  ): Promise<Habit> {
    return toggleSelection("habits", ctx, info, habitId, archivedAt) as Promise<Habit>;
  }
}
