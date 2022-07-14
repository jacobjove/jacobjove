import { ApolloContext } from "@/graphql/context";
import { ActCrudResolver } from "@/graphql/schema/resolvers/crud/Act/ActCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Act } from "../../../models/Act";
import { UpdateActArgs } from "./args/UpdateActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class UpdateActResolver {
  @TypeGraphQL.Mutation((_returns) => Act, {
    nullable: true,
  })
  async updateAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActArgs
  ): Promise<Act | null> {
    return ActCrudResolver.prototype.updateAct(ctx, info, args);
  }
}
