import { ApolloContext } from "@/graphql/context";
import { BookshelfCrudResolver } from "@/graphql/schema/resolvers/crud/Bookshelf/BookshelfCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Bookshelf } from "../../../models/Bookshelf";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyBookshelfArgs } from "./args/UpdateManyBookshelfArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class UpdateManyBookshelfResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBookshelfArgs
  ): Promise<AffectedRowsOutput> {
    return BookshelfCrudResolver.prototype.updateManyBookshelf(ctx, info, args);
  }
}
