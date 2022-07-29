import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getFirestoreDocDataFromSnapshot, getPrismaFromContext } from "../../../helpers";
import { Book } from "../../../models/Book";
import { Bookshelf } from "../../../models/Bookshelf";
import { Shelving } from "../../../models/Shelving";

@TypeGraphQL.Resolver((_of) => Shelving)
export class ShelvingRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Book, { nullable: false })
  async book(
    @TypeGraphQL.Root() shelving: Shelving,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Book> {
    if (USE_FIREBASE) {
      return await firestore
        .doc(`books/${shelving.bookId}`)
        .get()
        .then(async (doc) => {
          return getFirestoreDocDataFromSnapshot(doc) as Promise<Book>;
        });
    } else {
      return getPrismaFromContext(ctx)
        .shelving.findUnique({
          where: {
            id: shelving.id,
          },
        })
        .book({});
    }
  }

  @TypeGraphQL.FieldResolver(() => Bookshelf, { nullable: false })
  async shelf(
    @TypeGraphQL.Root() shelving: Shelving,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Bookshelf> {
    throw new Error("Not implemented");
    // return ShelvingCrudResolver.prototype.book(ctx, info, args);
  }
}
