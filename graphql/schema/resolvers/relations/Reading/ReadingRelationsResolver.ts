import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getFirestoreDocDataFromSnapshot, getPrismaFromContext } from "../../../helpers";
import { Book } from "../../../models/Book";
import { BookReview } from "../../../models/BookReview";
import { Reading } from "../../../models/Reading";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver((_of) => Reading)
export class ReadingRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() reading: Reading,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<User> {
    if (USE_FIREBASE) {
      return await firestore
        .doc(`users/${reading.userId}`)
        .get()
        .then(async (doc) => {
          return getFirestoreDocDataFromSnapshot(doc) as Promise<User>;
        });
    } else {
      return getPrismaFromContext(ctx)
        .reading.findUnique({
          where: {
            id: reading.id,
          },
        })
        .user({});
    }
  }

  @TypeGraphQL.FieldResolver(() => Book, { nullable: false })
  async book(
    @TypeGraphQL.Root() reading: Reading,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Book> {
    if (USE_FIREBASE) {
      return await firestore
        .doc(`books/${reading.bookId}`)
        .get()
        .then(async (doc) => {
          return getFirestoreDocDataFromSnapshot(doc) as Promise<Book>;
        });
    } else {
      return getPrismaFromContext(ctx)
        .reading.findUnique({
          where: {
            id: reading.id,
          },
        })
        .book({});
    }
  }

  @TypeGraphQL.FieldResolver(() => BookReview, { nullable: true })
  async review(
    @TypeGraphQL.Root() reading: Reading,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<BookReview | null> {
    throw new Error("Not implemented");
  }
}
