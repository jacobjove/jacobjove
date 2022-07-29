import { ApolloContext } from "@/graphql/context";
import { BookCrudResolver } from "@/graphql/schema/resolvers/crud/Book/BookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Book } from "../../../models/Book";
import { CreateBookArgs } from "./args/CreateBookArgs";

@TypeGraphQL.Resolver((_of) => Book)
export class CreateBookResolver {
  @TypeGraphQL.Mutation((_returns) => Book, { nullable: false })
  async createBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBookArgs
  ): Promise<Book> {
    return BookCrudResolver.prototype.createBook(ctx, info, args);
  }
}
