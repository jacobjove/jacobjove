import { ApolloContext } from "@/graphql/context";
import { AuthorshipCrudResolver } from "@/graphql/schema/resolvers/crud/Authorship/AuthorshipCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Authorship } from "../../../models/Authorship";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyAuthorshipArgs } from "./args/UpdateManyAuthorshipArgs";

@TypeGraphQL.Resolver((_of) => Authorship)
export class UpdateManyAuthorshipResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyAuthorshipArgs
  ): Promise<AffectedRowsOutput> {
    return AuthorshipCrudResolver.prototype.updateManyAuthorship(ctx, info, args);
  }
}
