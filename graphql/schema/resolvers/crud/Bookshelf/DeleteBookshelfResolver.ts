import { ApolloContext } from "@/graphql/context";
import { BookshelfCrudResolver } from "@/graphql/schema/resolvers/crud/Bookshelf/BookshelfCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Bookshelf } from "../../../models/Bookshelf";
import { DeleteBookshelfArgs } from "./args/DeleteBookshelfArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class DeleteBookshelfResolver {
  @TypeGraphQL.Mutation((_returns) => Bookshelf, { nullable: true })
  async deleteBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBookshelfArgs
  ): Promise<Bookshelf | null> {
    return BookshelfCrudResolver.prototype.deleteBookshelf(ctx, info, args);
  }
}
