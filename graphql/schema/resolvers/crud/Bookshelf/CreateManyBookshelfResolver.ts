import { ApolloContext } from "@/graphql/context";
import { BookshelfCrudResolver } from "@/graphql/schema/resolvers/crud/Bookshelf/BookshelfCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Bookshelf } from "../../../models/Bookshelf";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyBookshelfArgs } from "./args/CreateManyBookshelfArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class CreateManyBookshelfResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBookshelfArgs
  ): Promise<AffectedRowsOutput> {
    return BookshelfCrudResolver.prototype.createManyBookshelf(ctx, info, args);
  }
}
