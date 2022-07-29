import { ApolloContext } from "@/graphql/context";
import { BookCrudResolver } from "@/graphql/schema/resolvers/crud/Book/BookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Book } from "../../../models/Book";
import { FindManyBookArgs } from "./args/FindManyBookArgs";

@TypeGraphQL.Resolver((_of) => Book)
export class FindManyBookResolver {
  @TypeGraphQL.Query((_returns) => [Book], { nullable: false })
  async books(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBookArgs
  ): Promise<Book[]> {
    return BookCrudResolver.prototype.books(ctx, info, args);
  }
}
