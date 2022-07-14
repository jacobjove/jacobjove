import { ApolloContext } from "@/graphql/context";
import { AuthorshipCrudResolver } from "@/graphql/schema/resolvers/crud/Authorship/AuthorshipCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Authorship } from "../../../models/Authorship";
import { DeleteAuthorshipArgs } from "./args/DeleteAuthorshipArgs";

@TypeGraphQL.Resolver((_of) => Authorship)
export class DeleteAuthorshipResolver {
  @TypeGraphQL.Mutation((_returns) => Authorship, {
    nullable: true,
  })
  async deleteAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteAuthorshipArgs
  ): Promise<Authorship | null> {
    return AuthorshipCrudResolver.prototype.deleteAuthorship(ctx, info, args);
  }
}
