import { ApolloContext } from "@/graphql/context";
import { NotebookCrudResolver } from "@/graphql/schema/resolvers/crud/Notebook/NotebookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Notebook } from "../../../models/Notebook";
import { FindManyNotebookArgs } from "./args/FindManyNotebookArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class FindManyNotebookResolver {
  @TypeGraphQL.Query((_returns) => [Notebook], {
    nullable: false,
  })
  async notebooks(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyNotebookArgs
  ): Promise<Notebook[]> {
    return NotebookCrudResolver.prototype.notebooks(ctx, info, args);
  }
}
