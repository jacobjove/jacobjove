import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NotebookUserPermissionUserIdNotebookIdCompoundUniqueInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUserIdNotebookIdCompoundUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  notebookId!: string;
}
