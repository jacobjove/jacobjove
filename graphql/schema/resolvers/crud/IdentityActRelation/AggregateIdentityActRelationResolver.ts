import { ApolloContext } from "@/graphql/context";
import { IdentityActRelationCrudResolver } from "@/graphql/schema/resolvers/crud/IdentityActRelation/IdentityActRelationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { AggregateIdentityActRelation } from "../../outputs/AggregateIdentityActRelation";
import { AggregateIdentityActRelationArgs } from "./args/AggregateIdentityActRelationArgs";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class AggregateIdentityActRelationResolver {
  @TypeGraphQL.Query((_returns) => AggregateIdentityActRelation, { nullable: false })
  async aggregateIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateIdentityActRelationArgs
  ): Promise<AggregateIdentityActRelation> {
    return IdentityActRelationCrudResolver.prototype.aggregateIdentityActRelation(ctx, info, args);
  }
}
