import { ApolloContext } from "@/graphql/context";
import { AuthorCrudResolver } from "@/graphql/schema/resolvers/crud/Author/AuthorCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Author } from "../../../models/Author";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyAuthorArgs } from "./args/UpdateManyAuthorArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class UpdateManyAuthorResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyAuthorArgs
  ): Promise<AffectedRowsOutput> {
    return AuthorCrudResolver.prototype.updateManyAuthor(ctx, info, args);
  }
}
