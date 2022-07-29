import { ApolloContext } from "@/graphql/context";
import { CategorizationCrudResolver } from "@/graphql/schema/resolvers/crud/Categorization/CategorizationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Categorization } from "../../../models/Categorization";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyCategorizationArgs } from "./args/CreateManyCategorizationArgs";

@TypeGraphQL.Resolver((_of) => Categorization)
export class CreateManyCategorizationResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCategorizationArgs
  ): Promise<AffectedRowsOutput> {
    return CategorizationCrudResolver.prototype.createManyCategorization(ctx, info, args);
  }
}
