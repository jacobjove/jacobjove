import { ApolloContext } from "@/graphql/context";
import { BookshelfCrudResolver } from "@/graphql/schema/resolvers/crud/Bookshelf/BookshelfCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Bookshelf } from "../../../models/Bookshelf";
import { UpdateBookshelfArgs } from "./args/UpdateBookshelfArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class UpdateBookshelfResolver {
  @TypeGraphQL.Mutation((_returns) => Bookshelf, { nullable: true })
  async updateBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBookshelfArgs
  ): Promise<Bookshelf | null> {
    return BookshelfCrudResolver.prototype.updateBookshelf(ctx, info, args);
  }
}
