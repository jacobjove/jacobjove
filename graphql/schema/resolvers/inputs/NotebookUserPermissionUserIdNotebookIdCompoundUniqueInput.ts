import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("NotebookUserPermissionUserIdNotebookIdCompoundUniqueInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUserIdNotebookIdCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  notebookId!: string;
}
