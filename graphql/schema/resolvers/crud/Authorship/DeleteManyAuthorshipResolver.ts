import { ApolloContext } from "@/graphql/context";
import { AuthorshipCrudResolver } from "@/graphql/schema/resolvers/crud/Authorship/AuthorshipCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Authorship } from "../../../models/Authorship";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyAuthorshipArgs } from "./args/DeleteManyAuthorshipArgs";

@TypeGraphQL.Resolver((_of) => Authorship)
export class DeleteManyAuthorshipResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyAuthorshipArgs
  ): Promise<AffectedRowsOutput> {
    return AuthorshipCrudResolver.prototype.deleteManyAuthorship(ctx, info, args);
  }
}
