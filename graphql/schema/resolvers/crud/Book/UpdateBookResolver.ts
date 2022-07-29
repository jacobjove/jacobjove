import { ApolloContext } from "@/graphql/context";
import { BookCrudResolver } from "@/graphql/schema/resolvers/crud/Book/BookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Book } from "../../../models/Book";
import { UpdateBookArgs } from "./args/UpdateBookArgs";

@TypeGraphQL.Resolver((_of) => Book)
export class UpdateBookResolver {
  @TypeGraphQL.Mutation((_returns) => Book, { nullable: true })
  async updateBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBookArgs
  ): Promise<Book | null> {
    return BookCrudResolver.prototype.updateBook(ctx, info, args);
  }
}
