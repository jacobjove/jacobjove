import { ApolloContext } from "@/graphql/context";
import { IdentityActRelationCrudResolver } from "@/graphql/schema/resolvers/crud/IdentityActRelation/IdentityActRelationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { FindManyIdentityActRelationArgs } from "./args/FindManyIdentityActRelationArgs";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class FindManyIdentityActRelationResolver {
  @TypeGraphQL.Query((_returns) => [IdentityActRelation], {
    nullable: false,
  })
  async identityActRelations(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyIdentityActRelationArgs
  ): Promise<IdentityActRelation[]> {
    return IdentityActRelationCrudResolver.prototype.identityActRelations(ctx, info, args);
  }
}
