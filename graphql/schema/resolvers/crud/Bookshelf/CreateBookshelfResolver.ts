import { ApolloContext } from "@/graphql/context";
import { BookshelfCrudResolver } from "@/graphql/schema/resolvers/crud/Bookshelf/BookshelfCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Bookshelf } from "../../../models/Bookshelf";
import { CreateBookshelfArgs } from "./args/CreateBookshelfArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class CreateBookshelfResolver {
  @TypeGraphQL.Mutation((_returns) => Bookshelf, { nullable: false })
  async createBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBookshelfArgs
  ): Promise<Bookshelf> {
    return BookshelfCrudResolver.prototype.createBookshelf(ctx, info, args);
  }
}
