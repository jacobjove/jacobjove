import { ApolloContext } from "@/graphql/context";
import { BookCrudResolver } from "@/graphql/schema/resolvers/crud/Book/BookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { UpsertBookArgs } from "./args/UpsertBookArgs";

@TypeGraphQL.Resolver((_of) => Book)
export class UpsertBookResolver {
  @TypeGraphQL.Mutation((_returns) => Book, {
    nullable: false,
  })
  async upsertBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBookArgs
  ): Promise<Book> {
    return BookCrudResolver.prototype.upsertBook(ctx, info, args);
  }
}
