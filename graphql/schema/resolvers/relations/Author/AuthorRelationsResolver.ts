// import { getPrismaFromContext } from "../../../helpers";
import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Author } from "../../../models/Author";
import { Authorship } from "../../../models/Authorship";
import { AuthorAuthorshipsArgs } from "./args/AuthorAuthorshipsArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class AuthorRelationsResolver {
  @TypeGraphQL.FieldResolver(() => [Authorship], { nullable: false })
  async authorships(
    @TypeGraphQL.Root() author: Author,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: AuthorAuthorshipsArgs
  ): Promise<Authorship[]> {
    throw new Error("Not implemented");
    // return AuthorCrudResolver.prototype.authorships(ctx, info, args);
  }
}
