import { ApolloContext } from "@/graphql/context";
import { IdentityCrudResolver } from "@/graphql/schema/resolvers/crud/Identity/IdentityCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Identity } from "../../../models/Identity";
import { IdentityGroupBy } from "../../outputs/IdentityGroupBy";
import { GroupByIdentityArgs } from "./args/GroupByIdentityArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class GroupByIdentityResolver {
  @TypeGraphQL.Query((_returns) => [IdentityGroupBy], {
    nullable: false,
  })
  async groupByIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByIdentityArgs
  ): Promise<IdentityGroupBy[]> {
    return IdentityCrudResolver.prototype.groupByIdentity(ctx, info, args);
  }
}
