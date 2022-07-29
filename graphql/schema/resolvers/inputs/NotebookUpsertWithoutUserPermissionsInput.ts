import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateWithoutUserPermissionsInput } from "../inputs/NotebookCreateWithoutUserPermissionsInput";
import { NotebookUpdateWithoutUserPermissionsInput } from "../inputs/NotebookUpdateWithoutUserPermissionsInput";

@TypeGraphQL.InputType("NotebookUpsertWithoutUserPermissionsInput", {
  isAbstract: true,
})
export class NotebookUpsertWithoutUserPermissionsInput {
  @TypeGraphQL.Field((_type) => NotebookUpdateWithoutUserPermissionsInput, { nullable: false })
  update!: NotebookUpdateWithoutUserPermissionsInput;

  @TypeGraphQL.Field((_type) => NotebookCreateWithoutUserPermissionsInput, { nullable: false })
  create!: NotebookCreateWithoutUserPermissionsInput;
}
