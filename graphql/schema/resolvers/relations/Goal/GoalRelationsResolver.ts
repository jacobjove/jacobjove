import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import * as TypeGraphQL from "type-graphql";
import { getFirestoreDocDataFromSnapshot, getPrismaFromContext } from "../../../helpers";
import { Goal } from "../../../models/Goal";
import { Habit } from "../../../models/Habit";
import { GoalMilestonesArgs } from "./args/GoalMilestonesArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class GoalRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Habit, {
    nullable: false,
  })
  async habit(
    @TypeGraphQL.Root() goal: Goal,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Habit> {
    if (USE_FIREBASE) {
      return await firestore
        .doc(`habits/${goal.habitId}`)
        .get()
        .then(async (doc) => {
          return getFirestoreDocDataFromSnapshot(doc) as Promise<Habit>;
        });
    } else {
      return getPrismaFromContext(ctx)
        .goal.findUnique({
          where: {
            id: goal.id,
          },
        })
        .habit({});
    }
  }

  @TypeGraphQL.FieldResolver((_type) => Goal, {
    nullable: true,
  })
  async goal(
    @TypeGraphQL.Root() goal: Goal,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Goal | null> {
    return getPrismaFromContext(ctx)
      .goal.findUnique({
        where: {
          id: goal.id,
        },
      })
      .goal({});
  }

  @TypeGraphQL.FieldResolver((_type) => [Goal], {
    nullable: false,
  })
  async milestones(
    @TypeGraphQL.Root() goal: Goal,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: GoalMilestonesArgs
  ): Promise<Goal[]> {
    throw new Error("Not implemented");
  }
}
