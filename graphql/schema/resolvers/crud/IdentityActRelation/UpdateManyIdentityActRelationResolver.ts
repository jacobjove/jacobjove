import { ApolloContext } from "@/graphql/context";
import { IdentityActRelationCrudResolver } from "@/graphql/schema/resolvers/crud/IdentityActRelation/IdentityActRelationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyIdentityActRelationArgs } from "./args/UpdateManyIdentityActRelationArgs";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class UpdateManyIdentityActRelationResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyIdentityActRelationArgs
  ): Promise<AffectedRowsOutput> {
    return IdentityActRelationCrudResolver.prototype.updateManyIdentityActRelation(ctx, info, args);
  }
}
