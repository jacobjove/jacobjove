import { ApolloContext } from "@/graphql/context";
import { ActCrudResolver } from "@/graphql/schema/resolvers/crud/Act/ActCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Act } from "../../../models/Act";
import { FindManyActArgs } from "./args/FindManyActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class FindManyActResolver {
  @TypeGraphQL.Query((_returns) => [Act], {
    nullable: false,
  })
  async acts(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActArgs
  ): Promise<Act[]> {
    return ActCrudResolver.prototype.acts(ctx, info, args);
  }
}
