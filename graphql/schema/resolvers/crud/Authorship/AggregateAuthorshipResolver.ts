import { ApolloContext } from "@/graphql/context";
import { AuthorshipCrudResolver } from "@/graphql/schema/resolvers/crud/Authorship/AuthorshipCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Authorship } from "../../../models/Authorship";
import { AggregateAuthorship } from "../../outputs/AggregateAuthorship";
import { AggregateAuthorshipArgs } from "./args/AggregateAuthorshipArgs";

@TypeGraphQL.Resolver((_of) => Authorship)
export class AggregateAuthorshipResolver {
  @TypeGraphQL.Query((_returns) => AggregateAuthorship, {
    nullable: false,
  })
  async aggregateAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAuthorshipArgs
  ): Promise<AggregateAuthorship> {
    return AuthorshipCrudResolver.prototype.aggregateAuthorship(ctx, info, args);
  }
}
