import { ApolloContext } from "@/graphql/context";
import { NotebookUserPermissionCrudResolver } from "@/graphql/schema/resolvers/crud/NotebookUserPermission/NotebookUserPermissionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { UpsertNotebookUserPermissionArgs } from "./args/UpsertNotebookUserPermissionArgs";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class UpsertNotebookUserPermissionResolver {
  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, {
    nullable: false,
  })
  async upsertNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission> {
    return NotebookUserPermissionCrudResolver.prototype.upsertNotebookUserPermission(
      ctx,
      info,
      args
    );
  }
}
