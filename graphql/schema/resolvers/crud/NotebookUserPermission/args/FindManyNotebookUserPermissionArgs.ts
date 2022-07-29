import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionScalarFieldEnum } from "../../../../enums/NotebookUserPermissionScalarFieldEnum";
import { NotebookUserPermissionOrderByWithRelationInput } from "../../../inputs/NotebookUserPermissionOrderByWithRelationInput";
import { NotebookUserPermissionWhereInput } from "../../../inputs/NotebookUserPermissionWhereInput";
import { NotebookUserPermissionWhereUniqueInput } from "../../../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyNotebookUserPermissionArgs {
  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereInput, { nullable: true })
  where?: NotebookUserPermissionWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: NotebookUserPermissionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereUniqueInput, { nullable: true })
  cursor?: NotebookUserPermissionWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "userId" | "notebookId" | "archivedAt"> | undefined;
}
