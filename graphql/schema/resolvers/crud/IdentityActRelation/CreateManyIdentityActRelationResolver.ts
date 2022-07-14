import { ApolloContext } from "@/graphql/context";
import { IdentityActRelationCrudResolver } from "@/graphql/schema/resolvers/crud/IdentityActRelation/IdentityActRelationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyIdentityActRelationArgs } from "./args/CreateManyIdentityActRelationArgs";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class CreateManyIdentityActRelationResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyIdentityActRelationArgs
  ): Promise<AffectedRowsOutput> {
    return IdentityActRelationCrudResolver.prototype.createManyIdentityActRelation(ctx, info, args);
  }
}
