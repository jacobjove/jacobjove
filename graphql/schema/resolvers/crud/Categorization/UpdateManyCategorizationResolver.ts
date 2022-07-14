import { ApolloContext } from "@/graphql/context";
import { CategorizationCrudResolver } from "@/graphql/schema/resolvers/crud/Categorization/CategorizationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Categorization } from "../../../models/Categorization";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyCategorizationArgs } from "./args/UpdateManyCategorizationArgs";

@TypeGraphQL.Resolver((_of) => Categorization)
export class UpdateManyCategorizationResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCategorizationArgs
  ): Promise<AffectedRowsOutput> {
    return CategorizationCrudResolver.prototype.updateManyCategorization(ctx, info, args);
  }
}
