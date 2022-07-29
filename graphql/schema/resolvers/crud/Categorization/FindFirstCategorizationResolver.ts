import { ApolloContext } from "@/graphql/context";
import { CategorizationCrudResolver } from "@/graphql/schema/resolvers/crud/Categorization/CategorizationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Categorization } from "../../../models/Categorization";
import { FindFirstCategorizationArgs } from "./args/FindFirstCategorizationArgs";

@TypeGraphQL.Resolver((_of) => Categorization)
export class FindFirstCategorizationResolver {
  @TypeGraphQL.Query((_returns) => Categorization, { nullable: true })
  async findFirstCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCategorizationArgs
  ): Promise<Categorization | null> {
    return CategorizationCrudResolver.prototype.findFirstCategorization(ctx, info, args);
  }
}
