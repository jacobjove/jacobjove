import { ApolloContext } from "@/graphql/context";
import { NotebookUserPermissionCrudResolver } from "@/graphql/schema/resolvers/crud/NotebookUserPermission/NotebookUserPermissionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyNotebookUserPermissionArgs } from "./args/DeleteManyNotebookUserPermissionArgs";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class DeleteManyNotebookUserPermissionResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyNotebookUserPermissionArgs
  ): Promise<AffectedRowsOutput> {
    return NotebookUserPermissionCrudResolver.prototype.deleteManyNotebookUserPermission(
      ctx,
      info,
      args
    );
  }
}
