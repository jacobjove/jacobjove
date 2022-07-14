import { ApolloContext } from "@/graphql/context";
import { ListCrudResolver } from "@/graphql/schema/resolvers/crud/List/ListCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { List } from "../../../models/List";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyListArgs } from "./args/UpdateManyListArgs";

@TypeGraphQL.Resolver((_of) => List)
export class UpdateManyListResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyListArgs
  ): Promise<AffectedRowsOutput> {
    return ListCrudResolver.prototype.updateManyList(ctx, info, args);
  }
}
