import { ApolloContext } from "@/graphql/context";
import { IdentityActRelationCrudResolver } from "@/graphql/schema/resolvers/crud/IdentityActRelation/IdentityActRelationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { IdentityActRelationGroupBy } from "../../outputs/IdentityActRelationGroupBy";
import { GroupByIdentityActRelationArgs } from "./args/GroupByIdentityActRelationArgs";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class GroupByIdentityActRelationResolver {
  @TypeGraphQL.Query((_returns) => [IdentityActRelationGroupBy], {
    nullable: false,
  })
  async groupByIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByIdentityActRelationArgs
  ): Promise<IdentityActRelationGroupBy[]> {
    return IdentityActRelationCrudResolver.prototype.groupByIdentityActRelation(ctx, info, args);
  }
}
