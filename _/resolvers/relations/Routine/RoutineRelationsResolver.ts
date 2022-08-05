import { GqlContext } from "@/graphql/context";
import { Routine, RoutineHabit } from "@/graphql/schema/generated/models";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitsArgs } from "./args/RoutineHabitsArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class RoutineRelationsResolver {
  @TypeGraphQL.FieldResolver(() => [RoutineHabit], { nullable: false })
  async habits(
    @TypeGraphQL.Root() routine: Routine,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: RoutineHabitsArgs
  ): Promise<RoutineHabit[]> {
    throw new Error("Not implemented");
  }
}
