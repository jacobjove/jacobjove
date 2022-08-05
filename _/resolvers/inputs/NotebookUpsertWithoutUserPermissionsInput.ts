import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateWithoutUserPermissionsInput } from "../inputs/NotebookCreateWithoutUserPermissionsInput";
import { NotebookUpdateWithoutUserPermissionsInput } from "../inputs/NotebookUpdateWithoutUserPermissionsInput";

@TypeGraphQL.InputType("NotebookUpsertWithoutUserPermissionsInput", { isAbstract: true })
export class NotebookUpsertWithoutUserPermissionsInput {
  @TypeGraphQL.Field(() => NotebookUpdateWithoutUserPermissionsInput, { nullable: false })
  update!: NotebookUpdateWithoutUserPermissionsInput;

  @TypeGraphQL.Field(() => NotebookCreateWithoutUserPermissionsInput, { nullable: false })
  create!: NotebookCreateWithoutUserPermissionsInput;
}
