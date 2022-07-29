import { ApolloContext } from "@/graphql/context";
import { IdentityActRelationCrudResolver } from "@/graphql/schema/resolvers/crud/IdentityActRelation/IdentityActRelationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { CreateIdentityActRelationArgs } from "./args/CreateIdentityActRelationArgs";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class CreateIdentityActRelationResolver {
  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, { nullable: false })
  async createIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateIdentityActRelationArgs
  ): Promise<IdentityActRelation> {
    return IdentityActRelationCrudResolver.prototype.createIdentityActRelation(ctx, info, args);
  }
}
