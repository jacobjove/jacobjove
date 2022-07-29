import { ApolloContext } from "@/graphql/context";
import { NotebookUserPermissionCrudResolver } from "@/graphql/schema/resolvers/crud/NotebookUserPermission/NotebookUserPermissionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyNotebookUserPermissionArgs } from "./args/UpdateManyNotebookUserPermissionArgs";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class UpdateManyNotebookUserPermissionResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyNotebookUserPermissionArgs
  ): Promise<AffectedRowsOutput> {
    return NotebookUserPermissionCrudResolver.prototype.updateManyNotebookUserPermission(
      ctx,
      info,
      args
    );
  }
}
