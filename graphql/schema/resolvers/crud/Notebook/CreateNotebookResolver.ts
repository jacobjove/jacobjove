import { ApolloContext } from "@/graphql/context";
import { NotebookCrudResolver } from "@/graphql/schema/resolvers/crud/Notebook/NotebookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Notebook } from "../../../models/Notebook";
import { CreateNotebookArgs } from "./args/CreateNotebookArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class CreateNotebookResolver {
  @TypeGraphQL.Mutation((_returns) => Notebook, { nullable: false })
  async createNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateNotebookArgs
  ): Promise<Notebook> {
    return NotebookCrudResolver.prototype.createNotebook(ctx, info, args);
  }
}
