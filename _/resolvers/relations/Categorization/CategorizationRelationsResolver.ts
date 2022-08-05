import { GqlContext } from "@/graphql/context";
import { Categorization, Category } from "@/graphql/schema/generated/models";
import { Act } from "@/graphql/schema/generated/models/act.model";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => Categorization)
export class CategorizationRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Category, { nullable: false })
  async category(
    @TypeGraphQL.Root() categorization: Categorization,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Category> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Act, { nullable: false })
  async act(
    @TypeGraphQL.Root() categorization: Categorization,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Act> {
    throw new Error("Not implemented");
  }
}
