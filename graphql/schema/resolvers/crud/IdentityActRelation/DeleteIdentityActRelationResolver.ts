import { ApolloContext } from "@/graphql/context";
import { IdentityActRelationCrudResolver } from "@/graphql/schema/resolvers/crud/IdentityActRelation/IdentityActRelationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { DeleteIdentityActRelationArgs } from "./args/DeleteIdentityActRelationArgs";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class DeleteIdentityActRelationResolver {
  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, {
    nullable: true,
  })
  async deleteIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    return IdentityActRelationCrudResolver.prototype.deleteIdentityActRelation(ctx, info, args);
  }
}
