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
import { User } from "../../../models/User";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";

@TypeGraphQL.Resolver((_of) => User)
export class FindFirstUserResolver {
  @TypeGraphQL.Query((_returns) => User, {
    nullable: true,
  })
  async findFirstUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstUserArgs
  ): Promise<User | null> {
    const { _count } = transformFields(graphqlFields(info));
    if (USE_FIREBASE) {
      if (args.where) {
        const [key, value] = Object.entries(args.where)[0];
        const doc = await firestore
          .collection(`users`)
          .where(key, "==", value)
          .get()
          .then((snapshot) => snapshot.docs[0]);
        return getFirestoreDocDataFromSnapshot(doc) as Promise<User | null>;
      } else {
        console.error("Not implemented: FindFirstUserResolver");
        throw new Error("Not implemented");
      }
    } else {
      return getPrismaFromContext(ctx).user.findFirst({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
    }
  }
}
