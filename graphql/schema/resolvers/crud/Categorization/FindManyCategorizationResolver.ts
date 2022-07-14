import { ApolloContext } from "@/graphql/context";
import { CategorizationCrudResolver } from "@/graphql/schema/resolvers/crud/Categorization/CategorizationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Categorization } from "../../../models/Categorization";
import { FindManyCategorizationArgs } from "./args/FindManyCategorizationArgs";

@TypeGraphQL.Resolver((_of) => Categorization)
export class FindManyCategorizationResolver {
  @TypeGraphQL.Query((_returns) => [Categorization], {
    nullable: false,
  })
  async categorizations(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCategorizationArgs
  ): Promise<Categorization[]> {
    return CategorizationCrudResolver.prototype.categorizations(ctx, info, args);
  }
}
