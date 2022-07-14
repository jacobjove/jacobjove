import { ApolloContext } from "@/graphql/context";
import { CategorizationCrudResolver } from "@/graphql/schema/resolvers/crud/Categorization/CategorizationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Categorization } from "../../../models/Categorization";
import { UpdateCategorizationArgs } from "./args/UpdateCategorizationArgs";

@TypeGraphQL.Resolver((_of) => Categorization)
export class UpdateCategorizationResolver {
  @TypeGraphQL.Mutation((_returns) => Categorization, {
    nullable: true,
  })
  async updateCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCategorizationArgs
  ): Promise<Categorization | null> {
    return CategorizationCrudResolver.prototype.updateCategorization(ctx, info, args);
  }
}
