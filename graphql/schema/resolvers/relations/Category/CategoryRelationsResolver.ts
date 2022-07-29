// import { getPrismaFromContext } from "../../../helpers";
import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Categorization } from "../../../models/Categorization";
import { Category } from "../../../models/Category";
import { CategoryCategorizationsArgs } from "./args/CategoryCategorizationsArgs";

@TypeGraphQL.Resolver((_of) => Category)
export class CategoryRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Categorization], { nullable: false })
  async categorizations(
    @TypeGraphQL.Root() category: Category,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: CategoryCategorizationsArgs
  ): Promise<Categorization[]> {
    throw new Error("Not implemented");
    // return CategoryCrudResolver.prototype.categorizations(ctx, info, args);
  }
}
