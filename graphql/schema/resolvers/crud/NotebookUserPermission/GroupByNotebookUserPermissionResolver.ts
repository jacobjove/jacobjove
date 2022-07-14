import { ApolloContext } from "@/graphql/context";
import { NotebookUserPermissionCrudResolver } from "@/graphql/schema/resolvers/crud/NotebookUserPermission/NotebookUserPermissionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { NotebookUserPermissionGroupBy } from "../../outputs/NotebookUserPermissionGroupBy";
import { GroupByNotebookUserPermissionArgs } from "./args/GroupByNotebookUserPermissionArgs";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class GroupByNotebookUserPermissionResolver {
  @TypeGraphQL.Query((_returns) => [NotebookUserPermissionGroupBy], {
    nullable: false,
  })
  async groupByNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByNotebookUserPermissionArgs
  ): Promise<NotebookUserPermissionGroupBy[]> {
    return NotebookUserPermissionCrudResolver.prototype.groupByNotebookUserPermission(
      ctx,
      info,
      args
    );
  }
}
