import { ApolloContext } from "@/graphql/context";
import { AuthorshipCrudResolver } from "@/graphql/schema/resolvers/crud/Authorship/AuthorshipCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Authorship } from "../../../models/Authorship";
import { FindUniqueAuthorshipArgs } from "./args/FindUniqueAuthorshipArgs";

@TypeGraphQL.Resolver((_of) => Authorship)
export class FindUniqueAuthorshipResolver {
  @TypeGraphQL.Query((_returns) => Authorship, {
    nullable: true,
  })
  async authorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueAuthorshipArgs
  ): Promise<Authorship | null> {
    return AuthorshipCrudResolver.prototype.authorship(ctx, info, args);
  }
}
