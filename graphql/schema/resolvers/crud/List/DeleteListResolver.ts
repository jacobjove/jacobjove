import { ApolloContext } from "@/graphql/context";
import { ListCrudResolver } from "@/graphql/schema/resolvers/crud/List/ListCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { List } from "../../../models/List";
import { DeleteListArgs } from "./args/DeleteListArgs";

@TypeGraphQL.Resolver((_of) => List)
export class DeleteListResolver {
  @TypeGraphQL.Mutation((_returns) => List, { nullable: true })
  async deleteList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteListArgs
  ): Promise<List | null> {
    return ListCrudResolver.prototype.deleteList(ctx, info, args);
  }
}
