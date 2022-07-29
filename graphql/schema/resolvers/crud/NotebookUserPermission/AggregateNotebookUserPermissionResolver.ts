import { ApolloContext } from "@/graphql/context";
import { NotebookUserPermissionCrudResolver } from "@/graphql/schema/resolvers/crud/NotebookUserPermission/NotebookUserPermissionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { AggregateNotebookUserPermission } from "../../outputs/AggregateNotebookUserPermission";
import { AggregateNotebookUserPermissionArgs } from "./args/AggregateNotebookUserPermissionArgs";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class AggregateNotebookUserPermissionResolver {
  @TypeGraphQL.Query((_returns) => AggregateNotebookUserPermission, { nullable: false })
  async aggregateNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateNotebookUserPermissionArgs
  ): Promise<AggregateNotebookUserPermission> {
    return NotebookUserPermissionCrudResolver.prototype.aggregateNotebookUserPermission(
      ctx,
      info,
      args
    );
  }
}
