import { ApolloContext } from "@/graphql/context";
import { AuthorshipCrudResolver } from "@/graphql/schema/resolvers/crud/Authorship/AuthorshipCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Authorship } from "../../../models/Authorship";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyAuthorshipArgs } from "./args/CreateManyAuthorshipArgs";

@TypeGraphQL.Resolver((_of) => Authorship)
export class CreateManyAuthorshipResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAuthorshipArgs
  ): Promise<AffectedRowsOutput> {
    return AuthorshipCrudResolver.prototype.createManyAuthorship(ctx, info, args);
  }
}
