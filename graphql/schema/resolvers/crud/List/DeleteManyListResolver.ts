import { ApolloContext } from "@/graphql/context";
import { ListCrudResolver } from "@/graphql/schema/resolvers/crud/List/ListCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { List } from "../../../models/List";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyListArgs } from "./args/DeleteManyListArgs";

@TypeGraphQL.Resolver((_of) => List)
export class DeleteManyListResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyListArgs
  ): Promise<AffectedRowsOutput> {
    return ListCrudResolver.prototype.deleteManyList(ctx, info, args);
  }
}
