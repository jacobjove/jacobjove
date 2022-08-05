import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Act } from "@/graphql/schema/generated/models/act.model";
import { Categorization } from "@/graphql/schema/generated/models";
import { Category } from "@/graphql/schema/generated/models";

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
