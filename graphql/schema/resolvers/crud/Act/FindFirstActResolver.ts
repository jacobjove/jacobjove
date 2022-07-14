import { ApolloContext } from "@/graphql/context";
import { ActCrudResolver } from "@/graphql/schema/resolvers/crud/Act/ActCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Act } from "../../../models/Act";
import { FindFirstActArgs } from "./args/FindFirstActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class FindFirstActResolver {
  @TypeGraphQL.Query((_returns) => Act, {
    nullable: true,
  })
  async findFirstAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActArgs
  ): Promise<Act | null> {
    return ActCrudResolver.prototype.findFirstAct(ctx, info, args);
  }
}
