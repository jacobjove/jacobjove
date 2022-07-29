import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getFirestoreDocDataFromSnapshot, getPrismaFromContext } from "../../../helpers";
import { Item } from "../../../models/Item";
import { List } from "../../../models/List";
import { User } from "../../../models/User";
import { ListItemsArgs } from "./args/ListItemsArgs";

@TypeGraphQL.Resolver((_of) => List)
export class ListRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async owner(
    @TypeGraphQL.Root() list: List,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<User> {
    if (USE_FIREBASE) {
      return await firestore
        .doc(`users/${list.ownerId}`)
        .get()
        .then(async (doc) => {
          return getFirestoreDocDataFromSnapshot(doc) as Promise<User>;
        });
    } else {
      return getPrismaFromContext(ctx)
        .list.findUnique({
          where: {
            id: list.id,
          },
        })
        .owner({});
    }
  }

  @TypeGraphQL.FieldResolver(() => [Item], { nullable: false })
  async items(
    @TypeGraphQL.Root() list: List,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: ListItemsArgs
  ): Promise<Item[]> {
    throw new Error("Not implemented");
  }
}
