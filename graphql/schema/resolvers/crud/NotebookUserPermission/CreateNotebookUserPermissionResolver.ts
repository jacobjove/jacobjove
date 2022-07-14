import { ApolloContext } from "@/graphql/context";
import { NotebookUserPermissionCrudResolver } from "@/graphql/schema/resolvers/crud/NotebookUserPermission/NotebookUserPermissionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { CreateNotebookUserPermissionArgs } from "./args/CreateNotebookUserPermissionArgs";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class CreateNotebookUserPermissionResolver {
  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, {
    nullable: false,
  })
  async createNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission> {
    return NotebookUserPermissionCrudResolver.prototype.createNotebookUserPermission(
      ctx,
      info,
      args
    );
  }
}
