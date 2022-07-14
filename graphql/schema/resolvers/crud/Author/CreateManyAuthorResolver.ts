import { ApolloContext } from "@/graphql/context";
import { AuthorCrudResolver } from "@/graphql/schema/resolvers/crud/Author/AuthorCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Author } from "../../../models/Author";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyAuthorArgs } from "./args/CreateManyAuthorArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class CreateManyAuthorResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAuthorArgs
  ): Promise<AffectedRowsOutput> {
    return AuthorCrudResolver.prototype.createManyAuthor(ctx, info, args);
  }
}
