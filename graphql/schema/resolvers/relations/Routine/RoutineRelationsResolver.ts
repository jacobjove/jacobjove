// import { getPrismaFromContext } from "../../../helpers";
import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql";
import { Routine } from "../../../models/Routine";
import { RoutineHabit } from "../../../models/RoutineHabit";
import { RoutineHabitsArgs } from "./args/RoutineHabitsArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class RoutineRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [RoutineHabit], {
    nullable: false,
  })
  async habits(
    @TypeGraphQL.Root() routine: Routine,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: RoutineHabitsArgs
  ): Promise<RoutineHabit[]> {
    throw new Error("Not implemented");
    // return RoutineCrudResolver.prototype.habits(ctx, info, args);
  }
}
