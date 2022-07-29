import { ApolloContext } from "@/graphql/context";
import { BookCrudResolver } from "@/graphql/schema/resolvers/crud/Book/BookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Book } from "../../../models/Book";
import { DeleteBookArgs } from "./args/DeleteBookArgs";

@TypeGraphQL.Resolver((_of) => Book)
export class DeleteBookResolver {
  @TypeGraphQL.Mutation((_returns) => Book, { nullable: true })
  async deleteBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBookArgs
  ): Promise<Book | null> {
    return BookCrudResolver.prototype.deleteBook(ctx, info, args);
  }
}
