import { ApolloContext } from "@/graphql/context";
import { IdentityActRelationCrudResolver } from "@/graphql/schema/resolvers/crud/IdentityActRelation/IdentityActRelationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { FindFirstIdentityActRelationArgs } from "./args/FindFirstIdentityActRelationArgs";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class FindFirstIdentityActRelationResolver {
  @TypeGraphQL.Query((_returns) => IdentityActRelation, {
    nullable: true,
  })
  async findFirstIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    return IdentityActRelationCrudResolver.prototype.findFirstIdentityActRelation(ctx, info, args);
  }
}
