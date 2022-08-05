import { GqlContext } from "@/graphql/context";
import { Categorization, Category } from "@/graphql/schema/generated/models";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryCategorizationsArgs } from "./args/CategoryCategorizationsArgs";

@TypeGraphQL.Resolver((_of) => Category)
export class CategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(() => [Categorization], { nullable: false })
  async categorizations(
    @TypeGraphQL.Root() category: Category,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: CategoryCategorizationsArgs
  ): Promise<Categorization[]> {
    throw new Error("Not implemented");
  }
}
