import { ApolloContext } from "@/graphql/context";
import { CategorizationCrudResolver } from "@/graphql/schema/resolvers/crud/Categorization/CategorizationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Categorization } from "../../../models/Categorization";
import { DeleteCategorizationArgs } from "./args/DeleteCategorizationArgs";

@TypeGraphQL.Resolver((_of) => Categorization)
export class DeleteCategorizationResolver {
  @TypeGraphQL.Mutation((_returns) => Categorization, { nullable: true })
  async deleteCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCategorizationArgs
  ): Promise<Categorization | null> {
    return CategorizationCrudResolver.prototype.deleteCategorization(ctx, info, args);
  }
}
