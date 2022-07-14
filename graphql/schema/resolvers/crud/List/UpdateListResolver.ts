import { ApolloContext } from "@/graphql/context";
import { ListCrudResolver } from "@/graphql/schema/resolvers/crud/List/ListCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { List } from "../../../models/List";
import { UpdateListArgs } from "./args/UpdateListArgs";

@TypeGraphQL.Resolver((_of) => List)
export class UpdateListResolver {
  @TypeGraphQL.Mutation((_returns) => List, {
    nullable: true,
  })
  async updateList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateListArgs
  ): Promise<List | null> {
    return ListCrudResolver.prototype.updateList(ctx, info, args);
  }
}
