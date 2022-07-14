import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getFirestoreDocDataFromSnapshot,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Habit } from "../../../models/Habit";
import { FindUniqueHabitArgs } from "./args/FindUniqueHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class FindUniqueHabitResolver {
  @TypeGraphQL.Query((_returns) => Habit, {
    nullable: true,
  })
  async habit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueHabitArgs
  ): Promise<Habit | null> {
    const { _count } = transformFields(graphqlFields(info));
    if (USE_FIREBASE) {
      const [key, value] = Object.entries(args.where).filter(
        ([_key, value]) => typeof value !== "undefined"
      )[0];
      const doc = await firestore
        .collection(`users/${ctx.token?.uid}/habits`)
        .where(key, "==", value)
        .get()
        .then((snapshot) => snapshot.docs[0]);
      return getFirestoreDocDataFromSnapshot(doc) as Promise<Habit | null>;
    } else {
      return getPrismaFromContext(ctx).habit.findUnique({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
    }
  }
}
