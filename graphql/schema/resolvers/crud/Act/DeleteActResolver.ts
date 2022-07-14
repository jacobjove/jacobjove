import { ApolloContext } from "@/graphql/context";
import { ActCrudResolver } from "@/graphql/schema/resolvers/crud/Act/ActCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Act } from "../../../models/Act";
import { DeleteActArgs } from "./args/DeleteActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class DeleteActResolver {
  @TypeGraphQL.Mutation((_returns) => Act, {
    nullable: true,
  })
  async deleteAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActArgs
  ): Promise<Act | null> {
    return ActCrudResolver.prototype.deleteAct(ctx, info, args);
  }
}
