import { ApolloContext } from "@/graphql/context";
import { IdentityCrudResolver } from "@/graphql/schema/resolvers/crud/Identity/IdentityCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Identity } from "../../../models/Identity";
import { AggregateIdentity } from "../../outputs/AggregateIdentity";
import { AggregateIdentityArgs } from "./args/AggregateIdentityArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class AggregateIdentityResolver {
  @TypeGraphQL.Query((_returns) => AggregateIdentity, {
    nullable: false,
  })
  async aggregateIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateIdentityArgs
  ): Promise<AggregateIdentity> {
    return IdentityCrudResolver.prototype.aggregateIdentity(ctx, info, args);
  }
}
