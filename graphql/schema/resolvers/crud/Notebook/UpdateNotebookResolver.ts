import { ApolloContext } from "@/graphql/context";
import { NotebookCrudResolver } from "@/graphql/schema/resolvers/crud/Notebook/NotebookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Notebook } from "../../../models/Notebook";
import { UpdateNotebookArgs } from "./args/UpdateNotebookArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class UpdateNotebookResolver {
  @TypeGraphQL.Mutation((_returns) => Notebook, { nullable: true })
  async updateNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateNotebookArgs
  ): Promise<Notebook | null> {
    return NotebookCrudResolver.prototype.updateNotebook(ctx, info, args);
  }
}
