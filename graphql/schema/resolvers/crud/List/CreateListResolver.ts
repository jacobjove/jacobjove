import { ApolloContext } from "@/graphql/context";
import { ListCrudResolver } from "@/graphql/schema/resolvers/crud/List/ListCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { List } from "../../../models/List";
import { CreateListArgs } from "./args/CreateListArgs";

@TypeGraphQL.Resolver((_of) => List)
export class CreateListResolver {
  @TypeGraphQL.Mutation((_returns) => List, {
    nullable: false,
  })
  async createList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateListArgs
  ): Promise<List> {
    return ListCrudResolver.prototype.createList(ctx, info, args);
  }
}
