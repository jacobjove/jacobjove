import { ApolloContext } from "@/graphql/context";
import { NotebookUserPermissionCrudResolver } from "@/graphql/schema/resolvers/crud/NotebookUserPermission/NotebookUserPermissionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { DeleteNotebookUserPermissionArgs } from "./args/DeleteNotebookUserPermissionArgs";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class DeleteNotebookUserPermissionResolver {
  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, { nullable: true })
  async deleteNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    return NotebookUserPermissionCrudResolver.prototype.deleteNotebookUserPermission(
      ctx,
      info,
      args
    );
  }
}
