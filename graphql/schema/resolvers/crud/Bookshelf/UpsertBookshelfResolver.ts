import { ApolloContext } from "@/graphql/context";
import { BookshelfCrudResolver } from "@/graphql/schema/resolvers/crud/Bookshelf/BookshelfCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Bookshelf } from "../../../models/Bookshelf";
import { UpsertBookshelfArgs } from "./args/UpsertBookshelfArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class UpsertBookshelfResolver {
  @TypeGraphQL.Mutation((_returns) => Bookshelf, {
    nullable: false,
  })
  async upsertBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBookshelfArgs
  ): Promise<Bookshelf> {
    return BookshelfCrudResolver.prototype.upsertBookshelf(ctx, info, args);
  }
}
