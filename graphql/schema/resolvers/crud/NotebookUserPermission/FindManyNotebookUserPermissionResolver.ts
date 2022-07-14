import { ApolloContext } from "@/graphql/context";
import { NotebookUserPermissionCrudResolver } from "@/graphql/schema/resolvers/crud/NotebookUserPermission/NotebookUserPermissionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { FindManyNotebookUserPermissionArgs } from "./args/FindManyNotebookUserPermissionArgs";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class FindManyNotebookUserPermissionResolver {
  @TypeGraphQL.Query((_returns) => [NotebookUserPermission], {
    nullable: false,
  })
  async notebookUserPermissions(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission[]> {
    return NotebookUserPermissionCrudResolver.prototype.notebookUserPermissions(ctx, info, args);
  }
}
