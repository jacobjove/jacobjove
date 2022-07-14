import { ApolloContext } from "@/graphql/context";
import { ListCrudResolver } from "@/graphql/schema/resolvers/crud/List/ListCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { List } from "../../../models/List";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyListArgs } from "./args/CreateManyListArgs";

@TypeGraphQL.Resolver((_of) => List)
export class CreateManyListResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyListArgs
  ): Promise<AffectedRowsOutput> {
    return ListCrudResolver.prototype.createManyList(ctx, info, args);
  }
}
