import { ApolloContext } from "@/graphql/context";
import { NotebookUserPermissionCrudResolver } from "@/graphql/schema/resolvers/crud/NotebookUserPermission/NotebookUserPermissionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { FindUniqueNotebookUserPermissionArgs } from "./args/FindUniqueNotebookUserPermissionArgs";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class FindUniqueNotebookUserPermissionResolver {
  @TypeGraphQL.Query((_returns) => NotebookUserPermission, { nullable: true })
  async notebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    return NotebookUserPermissionCrudResolver.prototype.notebookUserPermission(ctx, info, args);
  }
}
