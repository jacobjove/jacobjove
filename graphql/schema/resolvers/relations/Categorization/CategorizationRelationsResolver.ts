import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql";
import { getPrismaFromContext } from "../../../helpers";
import { Act } from "../../../models/Act";
import { Categorization } from "../../../models/Categorization";
import { Category } from "../../../models/Category";

@TypeGraphQL.Resolver((_of) => Categorization)
export class CategorizationRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Category, {
    nullable: false,
  })
  async category(
    @TypeGraphQL.Root() categorization: Categorization,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Category> {
    return getPrismaFromContext(ctx)
      .categorization.findUnique({
        where: {
          id: categorization.id,
        },
      })
      .category({});
  }

  @TypeGraphQL.FieldResolver((_type) => Act, {
    nullable: false,
  })
  async act(
    @TypeGraphQL.Root() categorization: Categorization,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Act> {
    throw new Error("Not implemented");
    // return CategorizationCrudResolver.prototype.category(ctx, info, args);
  }
}
