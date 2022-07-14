import { ApolloContext } from "@/graphql/context";
import { CategorizationCrudResolver } from "@/graphql/schema/resolvers/crud/Categorization/CategorizationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Categorization } from "../../../models/Categorization";
import { CreateCategorizationArgs } from "./args/CreateCategorizationArgs";

@TypeGraphQL.Resolver((_of) => Categorization)
export class CreateCategorizationResolver {
  @TypeGraphQL.Mutation((_returns) => Categorization, {
    nullable: false,
  })
  async createCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCategorizationArgs
  ): Promise<Categorization> {
    return CategorizationCrudResolver.prototype.createCategorization(ctx, info, args);
  }
}
