import { ApolloContext } from "@/graphql/context";
import { ListCrudResolver } from "@/graphql/schema/resolvers/crud/List/ListCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { List } from "../../../models/List";
import { UpsertListArgs } from "./args/UpsertListArgs";

@TypeGraphQL.Resolver((_of) => List)
export class UpsertListResolver {
  @TypeGraphQL.Mutation((_returns) => List, {
    nullable: false,
  })
  async upsertList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertListArgs
  ): Promise<List> {
    return ListCrudResolver.prototype.upsertList(ctx, info, args);
  }
}
