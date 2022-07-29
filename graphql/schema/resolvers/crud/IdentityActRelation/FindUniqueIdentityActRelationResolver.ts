import { ApolloContext } from "@/graphql/context";
import { IdentityActRelationCrudResolver } from "@/graphql/schema/resolvers/crud/IdentityActRelation/IdentityActRelationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { FindUniqueIdentityActRelationArgs } from "./args/FindUniqueIdentityActRelationArgs";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class FindUniqueIdentityActRelationResolver {
  @TypeGraphQL.Query((_returns) => IdentityActRelation, { nullable: true })
  async identityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    return IdentityActRelationCrudResolver.prototype.identityActRelation(ctx, info, args);
  }
}
