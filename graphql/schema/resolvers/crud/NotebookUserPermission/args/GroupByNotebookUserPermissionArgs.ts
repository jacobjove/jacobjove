import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionScalarFieldEnum } from "../../../../enums/NotebookUserPermissionScalarFieldEnum";
import { NotebookUserPermissionOrderByWithAggregationInput } from "../../../inputs/NotebookUserPermissionOrderByWithAggregationInput";
import { NotebookUserPermissionScalarWhereWithAggregatesInput } from "../../../inputs/NotebookUserPermissionScalarWhereWithAggregatesInput";
import { NotebookUserPermissionWhereInput } from "../../../inputs/NotebookUserPermissionWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByNotebookUserPermissionArgs {
  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereInput, {
    nullable: true,
  })
  where?: NotebookUserPermissionWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: NotebookUserPermissionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "userId" | "notebookId" | "archivedAt">;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: NotebookUserPermissionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
