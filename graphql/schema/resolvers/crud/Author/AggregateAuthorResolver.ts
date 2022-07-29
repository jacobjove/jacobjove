import { ApolloContext } from "@/graphql/context";
import { AuthorCrudResolver } from "@/graphql/schema/resolvers/crud/Author/AuthorCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Author } from "../../../models/Author";
import { AggregateAuthor } from "../../outputs/AggregateAuthor";
import { AggregateAuthorArgs } from "./args/AggregateAuthorArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class AggregateAuthorResolver {
  @TypeGraphQL.Query((_returns) => AggregateAuthor, { nullable: false })
  async aggregateAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAuthorArgs
  ): Promise<AggregateAuthor> {
    return AuthorCrudResolver.prototype.aggregateAuthor(ctx, info, args);
  }
}
