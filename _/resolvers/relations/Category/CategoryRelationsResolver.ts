import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Categorization } from "@/graphql/schema/generated/models";
import { Category } from "@/graphql/schema/generated/models";
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
