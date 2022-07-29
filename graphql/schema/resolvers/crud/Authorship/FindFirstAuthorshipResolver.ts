import { ApolloContext } from "@/graphql/context";
import { AuthorshipCrudResolver } from "@/graphql/schema/resolvers/crud/Authorship/AuthorshipCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Authorship } from "../../../models/Authorship";
import { FindFirstAuthorshipArgs } from "./args/FindFirstAuthorshipArgs";

@TypeGraphQL.Resolver((_of) => Authorship)
export class FindFirstAuthorshipResolver {
  @TypeGraphQL.Query((_returns) => Authorship, { nullable: true })
  async findFirstAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAuthorshipArgs
  ): Promise<Authorship | null> {
    return AuthorshipCrudResolver.prototype.findFirstAuthorship(ctx, info, args);
  }
}
