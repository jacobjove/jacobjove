import { ApolloContext } from "@/graphql/context";
import { BookshelfCrudResolver } from "@/graphql/schema/resolvers/crud/Bookshelf/BookshelfCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Bookshelf } from "../../../models/Bookshelf";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyBookshelfArgs } from "./args/DeleteManyBookshelfArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class DeleteManyBookshelfResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBookshelfArgs
  ): Promise<AffectedRowsOutput> {
    return BookshelfCrudResolver.prototype.deleteManyBookshelf(ctx, info, args);
  }
}
