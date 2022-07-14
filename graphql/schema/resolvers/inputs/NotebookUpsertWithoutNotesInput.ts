import * as TypeGraphQL from "type-graphql";
import { NotebookCreateWithoutNotesInput } from "../inputs/NotebookCreateWithoutNotesInput";
import { NotebookUpdateWithoutNotesInput } from "../inputs/NotebookUpdateWithoutNotesInput";

@TypeGraphQL.InputType("NotebookUpsertWithoutNotesInput", {
  isAbstract: true,
})
export class NotebookUpsertWithoutNotesInput {
  @TypeGraphQL.Field((_type) => NotebookUpdateWithoutNotesInput, {
    nullable: false,
  })
  update!: NotebookUpdateWithoutNotesInput;

  @TypeGraphQL.Field((_type) => NotebookCreateWithoutNotesInput, {
    nullable: false,
  })
  create!: NotebookCreateWithoutNotesInput;
}
