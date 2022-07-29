import { ApolloContext } from "@/graphql/context";
import { NotebookCrudResolver } from "@/graphql/schema/resolvers/crud/Notebook/NotebookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Notebook } from "../../../models/Notebook";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyNotebookArgs } from "./args/UpdateManyNotebookArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class UpdateManyNotebookResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyNotebookArgs
  ): Promise<AffectedRowsOutput> {
    return NotebookCrudResolver.prototype.updateManyNotebook(ctx, info, args);
  }
}
