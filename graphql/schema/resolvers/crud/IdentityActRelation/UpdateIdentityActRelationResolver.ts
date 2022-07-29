import { ApolloContext } from "@/graphql/context";
import { IdentityActRelationCrudResolver } from "@/graphql/schema/resolvers/crud/IdentityActRelation/IdentityActRelationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { UpdateIdentityActRelationArgs } from "./args/UpdateIdentityActRelationArgs";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class UpdateIdentityActRelationResolver {
  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, { nullable: true })
  async updateIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    return IdentityActRelationCrudResolver.prototype.updateIdentityActRelation(ctx, info, args);
  }
}
