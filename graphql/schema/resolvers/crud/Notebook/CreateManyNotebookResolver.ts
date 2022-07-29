import { ApolloContext } from "@/graphql/context";
import { NotebookCrudResolver } from "@/graphql/schema/resolvers/crud/Notebook/NotebookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Notebook } from "../../../models/Notebook";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyNotebookArgs } from "./args/CreateManyNotebookArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class CreateManyNotebookResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyNotebookArgs
  ): Promise<AffectedRowsOutput> {
    return NotebookCrudResolver.prototype.createManyNotebook(ctx, info, args);
  }
}
