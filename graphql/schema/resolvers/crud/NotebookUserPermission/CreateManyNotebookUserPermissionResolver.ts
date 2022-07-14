import { ApolloContext } from "@/graphql/context";
import { NotebookUserPermissionCrudResolver } from "@/graphql/schema/resolvers/crud/NotebookUserPermission/NotebookUserPermissionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyNotebookUserPermissionArgs } from "./args/CreateManyNotebookUserPermissionArgs";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class CreateManyNotebookUserPermissionResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyNotebookUserPermissionArgs
  ): Promise<AffectedRowsOutput> {
    return NotebookUserPermissionCrudResolver.prototype.createManyNotebookUserPermission(
      ctx,
      info,
      args
    );
  }
}
