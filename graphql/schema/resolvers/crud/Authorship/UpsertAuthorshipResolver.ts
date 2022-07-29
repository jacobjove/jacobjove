import { ApolloContext } from "@/graphql/context";
import { AuthorshipCrudResolver } from "@/graphql/schema/resolvers/crud/Authorship/AuthorshipCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Authorship } from "../../../models/Authorship";
import { UpsertAuthorshipArgs } from "./args/UpsertAuthorshipArgs";

@TypeGraphQL.Resolver((_of) => Authorship)
export class UpsertAuthorshipResolver {
  @TypeGraphQL.Mutation((_returns) => Authorship, { nullable: false })
  async upsertAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertAuthorshipArgs
  ): Promise<Authorship> {
    return AuthorshipCrudResolver.prototype.upsertAuthorship(ctx, info, args);
  }
}
