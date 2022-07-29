import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateWithoutNotesInput } from "../inputs/NotebookCreateWithoutNotesInput";
import { NotebookUpdateWithoutNotesInput } from "../inputs/NotebookUpdateWithoutNotesInput";

@TypeGraphQL.InputType("NotebookUpsertWithoutNotesInput", {
  isAbstract: true,
})
export class NotebookUpsertWithoutNotesInput {
  @TypeGraphQL.Field(() => NotebookUpdateWithoutNotesInput, { nullable: false })
  update!: NotebookUpdateWithoutNotesInput;

  @TypeGraphQL.Field(() => NotebookCreateWithoutNotesInput, { nullable: false })
  create!: NotebookCreateWithoutNotesInput;
}
