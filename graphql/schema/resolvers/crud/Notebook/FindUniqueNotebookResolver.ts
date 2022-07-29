import { ApolloContext } from "@/graphql/context";
import { NotebookCrudResolver } from "@/graphql/schema/resolvers/crud/Notebook/NotebookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Notebook } from "../../../models/Notebook";
import { FindUniqueNotebookArgs } from "./args/FindUniqueNotebookArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class FindUniqueNotebookResolver {
  @TypeGraphQL.Query((_returns) => Notebook, { nullable: true })
  async notebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueNotebookArgs
  ): Promise<Notebook | null> {
    return NotebookCrudResolver.prototype.notebook(ctx, info, args);
  }
}
