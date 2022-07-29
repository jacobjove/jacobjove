import { ApolloContext } from "@/graphql/context";
import { CategoryCrudResolver } from "@/graphql/schema/resolvers/crud/Category/CategoryCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Category } from "../../../models/Category";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyCategoryArgs } from "./args/UpdateManyCategoryArgs";

@TypeGraphQL.Resolver((_of) => Category)
export class UpdateManyCategoryResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCategoryArgs
  ): Promise<AffectedRowsOutput> {
    return CategoryCrudResolver.prototype.updateManyCategory(ctx, info, args);
  }
}
