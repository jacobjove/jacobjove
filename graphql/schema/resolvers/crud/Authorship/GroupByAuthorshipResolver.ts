import { ApolloContext } from "@/graphql/context";
import { AuthorshipCrudResolver } from "@/graphql/schema/resolvers/crud/Authorship/AuthorshipCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Authorship } from "../../../models/Authorship";
import { AuthorshipGroupBy } from "../../outputs/AuthorshipGroupBy";
import { GroupByAuthorshipArgs } from "./args/GroupByAuthorshipArgs";

@TypeGraphQL.Resolver((_of) => Authorship)
export class GroupByAuthorshipResolver {
  @TypeGraphQL.Query((_returns) => [AuthorshipGroupBy], {
    nullable: false,
  })
  async groupByAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByAuthorshipArgs
  ): Promise<AuthorshipGroupBy[]> {
    return AuthorshipCrudResolver.prototype.groupByAuthorship(ctx, info, args);
  }
}
