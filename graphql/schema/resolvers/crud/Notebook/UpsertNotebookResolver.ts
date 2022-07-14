import { ApolloContext } from "@/graphql/context";
import { NotebookCrudResolver } from "@/graphql/schema/resolvers/crud/Notebook/NotebookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Notebook } from "../../../models/Notebook";
import { UpsertNotebookArgs } from "./args/UpsertNotebookArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class UpsertNotebookResolver {
  @TypeGraphQL.Mutation((_returns) => Notebook, {
    nullable: false,
  })
  async upsertNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertNotebookArgs
  ): Promise<Notebook> {
    return NotebookCrudResolver.prototype.upsertNotebook(ctx, info, args);
  }
}
