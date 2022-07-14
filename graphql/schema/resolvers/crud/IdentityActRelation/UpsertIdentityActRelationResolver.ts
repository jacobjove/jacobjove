import { ApolloContext } from "@/graphql/context";
import { IdentityActRelationCrudResolver } from "@/graphql/schema/resolvers/crud/IdentityActRelation/IdentityActRelationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { UpsertIdentityActRelationArgs } from "./args/UpsertIdentityActRelationArgs";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class UpsertIdentityActRelationResolver {
  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, {
    nullable: false,
  })
  async upsertIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertIdentityActRelationArgs
  ): Promise<IdentityActRelation> {
    return IdentityActRelationCrudResolver.prototype.upsertIdentityActRelation(ctx, info, args);
  }
}
