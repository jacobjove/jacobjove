import { GqlContext } from "@/graphql/context";
import { Goal } from "@/graphql/schema/generated/models/goal.model";
import { Habit } from "@/graphql/schema/generated/models/habit.model";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalMilestonesArgs } from "./args/GoalMilestonesArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class GoalRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Habit, { nullable: false })
  async habit(@TypeGraphQL.Root() goal: Goal, @TypeGraphQL.Ctx() ctx: GqlContext): Promise<Habit> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Goal, { nullable: true })
  async goal(
    @TypeGraphQL.Root() goal: Goal,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Goal | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Goal], { nullable: false })
  async milestones(
    @TypeGraphQL.Root() goal: Goal,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: GoalMilestonesArgs
  ): Promise<Goal[]> {
    throw new Error("Not implemented");
  }
}
