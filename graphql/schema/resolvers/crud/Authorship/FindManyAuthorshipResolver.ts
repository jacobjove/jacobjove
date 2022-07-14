import { ApolloContext } from "@/graphql/context";
import { AuthorshipCrudResolver } from "@/graphql/schema/resolvers/crud/Authorship/AuthorshipCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Authorship } from "../../../models/Authorship";
import { FindManyAuthorshipArgs } from "./args/FindManyAuthorshipArgs";

@TypeGraphQL.Resolver((_of) => Authorship)
export class FindManyAuthorshipResolver {
  @TypeGraphQL.Query((_returns) => [Authorship], {
    nullable: false,
  })
  async authorships(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyAuthorshipArgs
  ): Promise<Authorship[]> {
    return AuthorshipCrudResolver.prototype.authorships(ctx, info, args);
  }
}
