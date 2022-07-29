import { ApolloContext } from "@/graphql/context";
import { CategoryCrudResolver } from "@/graphql/schema/resolvers/crud/Category/CategoryCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Category } from "../../../models/Category";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyCategoryArgs } from "./args/DeleteManyCategoryArgs";

@TypeGraphQL.Resolver((_of) => Category)
export class DeleteManyCategoryResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCategoryArgs
  ): Promise<AffectedRowsOutput> {
    return CategoryCrudResolver.prototype.deleteManyCategory(ctx, info, args);
  }
}
