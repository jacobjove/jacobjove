import { ApolloContext } from "@/graphql/context";
import { NotebookUserPermissionCrudResolver } from "@/graphql/schema/resolvers/crud/NotebookUserPermission/NotebookUserPermissionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { FindFirstNotebookUserPermissionArgs } from "./args/FindFirstNotebookUserPermissionArgs";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class FindFirstNotebookUserPermissionResolver {
  @TypeGraphQL.Query((_returns) => NotebookUserPermission, {
    nullable: true,
  })
  async findFirstNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    return NotebookUserPermissionCrudResolver.prototype.findFirstNotebookUserPermission(
      ctx,
      info,
      args
    );
  }
}
