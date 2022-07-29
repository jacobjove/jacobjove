import { ApolloContext } from "@/graphql/context";
import { NotebookCrudResolver } from "@/graphql/schema/resolvers/crud/Notebook/NotebookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Notebook } from "../../../models/Notebook";
import { DeleteNotebookArgs } from "./args/DeleteNotebookArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class DeleteNotebookResolver {
  @TypeGraphQL.Mutation((_returns) => Notebook, { nullable: true })
  async deleteNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteNotebookArgs
  ): Promise<Notebook | null> {
    return NotebookCrudResolver.prototype.deleteNotebook(ctx, info, args);
  }
}
