import { ApolloContext } from "@/graphql/context";
import { CategorizationCrudResolver } from "@/graphql/schema/resolvers/crud/Categorization/CategorizationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Categorization } from "../../../models/Categorization";
import { FindUniqueCategorizationArgs } from "./args/FindUniqueCategorizationArgs";

@TypeGraphQL.Resolver((_of) => Categorization)
export class FindUniqueCategorizationResolver {
  @TypeGraphQL.Query((_returns) => Categorization, {
    nullable: true,
  })
  async categorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCategorizationArgs
  ): Promise<Categorization | null> {
    return CategorizationCrudResolver.prototype.categorization(ctx, info, args);
  }
}
