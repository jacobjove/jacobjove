import { ApolloContext } from "@/graphql/context";
import { AuthorCrudResolver } from "@/graphql/schema/resolvers/crud/Author/AuthorCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Author } from "../../../models/Author";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyAuthorArgs } from "./args/DeleteManyAuthorArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class DeleteManyAuthorResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyAuthorArgs
  ): Promise<AffectedRowsOutput> {
    return AuthorCrudResolver.prototype.deleteManyAuthor(ctx, info, args);
  }
}
