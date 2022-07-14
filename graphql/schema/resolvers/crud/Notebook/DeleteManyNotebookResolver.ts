import { ApolloContext } from "@/graphql/context";
import { NotebookCrudResolver } from "@/graphql/schema/resolvers/crud/Notebook/NotebookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Notebook } from "../../../models/Notebook";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyNotebookArgs } from "./args/DeleteManyNotebookArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class DeleteManyNotebookResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyNotebookArgs
  ): Promise<AffectedRowsOutput> {
    return NotebookCrudResolver.prototype.deleteManyNotebook(ctx, info, args);
  }
}
