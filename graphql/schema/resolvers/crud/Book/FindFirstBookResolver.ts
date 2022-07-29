import { ApolloContext } from "@/graphql/context";
import { BookCrudResolver } from "@/graphql/schema/resolvers/crud/Book/BookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Book } from "../../../models/Book";
import { FindFirstBookArgs } from "./args/FindFirstBookArgs";

@TypeGraphQL.Resolver((_of) => Book)
export class FindFirstBookResolver {
  @TypeGraphQL.Query((_returns) => Book, { nullable: true })
  async findFirstBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBookArgs
  ): Promise<Book | null> {
    return BookCrudResolver.prototype.findFirstBook(ctx, info, args);
  }
}
