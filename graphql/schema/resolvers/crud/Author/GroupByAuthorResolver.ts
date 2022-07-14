import { ApolloContext } from "@/graphql/context";
import { AuthorCrudResolver } from "@/graphql/schema/resolvers/crud/Author/AuthorCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Author } from "../../../models/Author";
import { AuthorGroupBy } from "../../outputs/AuthorGroupBy";
import { GroupByAuthorArgs } from "./args/GroupByAuthorArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class GroupByAuthorResolver {
  @TypeGraphQL.Query((_returns) => [AuthorGroupBy], {
    nullable: false,
  })
  async groupByAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByAuthorArgs
  ): Promise<AuthorGroupBy[]> {
    return AuthorCrudResolver.prototype.groupByAuthor(ctx, info, args);
  }
}
