import { ApolloContext } from "@/graphql/context";
import { NotebookUserPermissionCrudResolver } from "@/graphql/schema/resolvers/crud/NotebookUserPermission/NotebookUserPermissionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { UpdateNotebookUserPermissionArgs } from "./args/UpdateNotebookUserPermissionArgs";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class UpdateNotebookUserPermissionResolver {
  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, {
    nullable: true,
  })
  async updateNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    return NotebookUserPermissionCrudResolver.prototype.updateNotebookUserPermission(
      ctx,
      info,
      args
    );
  }
}
