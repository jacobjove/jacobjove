import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getFirestoreDocDataFromSnapshot, getPrismaFromContext } from "../../../helpers";
import { Account } from "../../../models/Account";
import { Calendar } from "../../../models/Calendar";
import { User } from "../../../models/User";
import { AccountCalendarsArgs } from "./args/AccountCalendarsArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class AccountRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() account: Account,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<User> {
    if (USE_FIREBASE) {
      return await firestore
        .doc(`users/${account.userId}`)
        .get()
        .then(async (doc) => {
          return getFirestoreDocDataFromSnapshot(doc) as Promise<User>;
        });
    } else {
      return getPrismaFromContext(ctx)
        .account.findUnique({
          where: {
            id: account.id,
          },
        })
        .user({});
    }
  }

  @TypeGraphQL.FieldResolver((_type) => [Calendar], { nullable: false })
  async calendars(
    @TypeGraphQL.Root() account: Account,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: AccountCalendarsArgs
  ): Promise<Calendar[]> {
    throw new Error("Not implemented");
    // return AccountCrudResolver.prototype.calendars(ctx, info, args);
  }
}
