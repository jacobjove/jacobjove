import { ApolloContext } from "@/graphql/context";
import { NotebookCrudResolver } from "@/graphql/schema/resolvers/crud/Notebook/NotebookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Notebook } from "../../../models/Notebook";
import { NotebookGroupBy } from "../../outputs/NotebookGroupBy";
import { GroupByNotebookArgs } from "./args/GroupByNotebookArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class GroupByNotebookResolver {
  @TypeGraphQL.Query((_returns) => [NotebookGroupBy], {
    nullable: false,
  })
  async groupByNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByNotebookArgs
  ): Promise<NotebookGroupBy[]> {
    return NotebookCrudResolver.prototype.groupByNotebook(ctx, info, args);
  }
}
