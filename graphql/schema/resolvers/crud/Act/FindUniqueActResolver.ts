import { ApolloContext } from "@/graphql/context";
import { ActCrudResolver } from "@/graphql/schema/resolvers/crud/Act/ActCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Act } from "../../../models/Act";
import { FindUniqueActArgs } from "./args/FindUniqueActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class FindUniqueActResolver {
  @TypeGraphQL.Query((_returns) => Act, {
    nullable: true,
  })
  async act(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActArgs
  ): Promise<Act | null> {
    return ActCrudResolver.prototype.act(ctx, info, args);
  }
}
