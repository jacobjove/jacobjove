import { ApolloContext } from "@/graphql/context";
import { CategorizationCrudResolver } from "@/graphql/schema/resolvers/crud/Categorization/CategorizationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Categorization } from "../../../models/Categorization";
import { UpsertCategorizationArgs } from "./args/UpsertCategorizationArgs";

@TypeGraphQL.Resolver((_of) => Categorization)
export class UpsertCategorizationResolver {
  @TypeGraphQL.Mutation((_returns) => Categorization, {
    nullable: false,
  })
  async upsertCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCategorizationArgs
  ): Promise<Categorization> {
    return CategorizationCrudResolver.prototype.upsertCategorization(ctx, info, args);
  }
}
