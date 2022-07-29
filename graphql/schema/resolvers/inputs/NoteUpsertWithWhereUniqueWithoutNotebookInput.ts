import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteCreateWithoutNotebookInput } from "../inputs/NoteCreateWithoutNotebookInput";
import { NoteUpdateWithoutNotebookInput } from "../inputs/NoteUpdateWithoutNotebookInput";
import { NoteWhereUniqueInput } from "../inputs/NoteWhereUniqueInput";

@TypeGraphQL.InputType("NoteUpsertWithWhereUniqueWithoutNotebookInput", {
  isAbstract: true,
})
export class NoteUpsertWithWhereUniqueWithoutNotebookInput {
  @TypeGraphQL.Field((_type) => NoteWhereUniqueInput, { nullable: false })
  where!: NoteWhereUniqueInput;

  @TypeGraphQL.Field((_type) => NoteUpdateWithoutNotebookInput, { nullable: false })
  update!: NoteUpdateWithoutNotebookInput;

  @TypeGraphQL.Field((_type) => NoteCreateWithoutNotebookInput, { nullable: false })
  create!: NoteCreateWithoutNotebookInput;
}
