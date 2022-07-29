import { ApolloContext } from "@/graphql/context";
import { NotebookCrudResolver } from "@/graphql/schema/resolvers/crud/Notebook/NotebookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Notebook } from "../../../models/Notebook";
import { FindFirstNotebookArgs } from "./args/FindFirstNotebookArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class FindFirstNotebookResolver {
  @TypeGraphQL.Query((_returns) => Notebook, { nullable: true })
  async findFirstNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstNotebookArgs
  ): Promise<Notebook | null> {
    return NotebookCrudResolver.prototype.findFirstNotebook(ctx, info, args);
  }
}
