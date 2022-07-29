import { ApolloContext } from "@/graphql/context";
import { CategorizationCrudResolver } from "@/graphql/schema/resolvers/crud/Categorization/CategorizationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Categorization } from "../../../models/Categorization";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyCategorizationArgs } from "./args/DeleteManyCategorizationArgs";

@TypeGraphQL.Resolver((_of) => Categorization)
export class DeleteManyCategorizationResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCategorizationArgs
  ): Promise<AffectedRowsOutput> {
    return CategorizationCrudResolver.prototype.deleteManyCategorization(ctx, info, args);
  }
}
