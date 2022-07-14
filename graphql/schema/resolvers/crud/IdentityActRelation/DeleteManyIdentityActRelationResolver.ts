import { ApolloContext } from "@/graphql/context";
import { IdentityActRelationCrudResolver } from "@/graphql/schema/resolvers/crud/IdentityActRelation/IdentityActRelationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyIdentityActRelationArgs } from "./args/DeleteManyIdentityActRelationArgs";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class DeleteManyIdentityActRelationResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyIdentityActRelationArgs
  ): Promise<AffectedRowsOutput> {
    return IdentityActRelationCrudResolver.prototype.deleteManyIdentityActRelation(ctx, info, args);
  }
}
