import { ApolloContext } from "@/graphql/context";
import { AuthorshipCrudResolver } from "@/graphql/schema/resolvers/crud/Authorship/AuthorshipCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Authorship } from "../../../models/Authorship";
import { UpdateAuthorshipArgs } from "./args/UpdateAuthorshipArgs";

@TypeGraphQL.Resolver((_of) => Authorship)
export class UpdateAuthorshipResolver {
  @TypeGraphQL.Mutation((_returns) => Authorship, {
    nullable: true,
  })
  async updateAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateAuthorshipArgs
  ): Promise<Authorship | null> {
    return AuthorshipCrudResolver.prototype.updateAuthorship(ctx, info, args);
  }
}
