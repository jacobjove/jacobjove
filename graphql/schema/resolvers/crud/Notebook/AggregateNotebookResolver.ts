import { ApolloContext } from "@/graphql/context";
import { NotebookCrudResolver } from "@/graphql/schema/resolvers/crud/Notebook/NotebookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Notebook } from "../../../models/Notebook";
import { AggregateNotebook } from "../../outputs/AggregateNotebook";
import { AggregateNotebookArgs } from "./args/AggregateNotebookArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class AggregateNotebookResolver {
  @TypeGraphQL.Query((_returns) => AggregateNotebook, { nullable: false })
  async aggregateNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateNotebookArgs
  ): Promise<AggregateNotebook> {
    return NotebookCrudResolver.prototype.aggregateNotebook(ctx, info, args);
  }
}
