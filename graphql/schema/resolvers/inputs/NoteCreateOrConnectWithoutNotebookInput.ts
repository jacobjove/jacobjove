import * as TypeGraphQL from "type-graphql";
import { NoteCreateWithoutNotebookInput } from "../inputs/NoteCreateWithoutNotebookInput";
import { NoteWhereUniqueInput } from "../inputs/NoteWhereUniqueInput";

@TypeGraphQL.InputType("NoteCreateOrConnectWithoutNotebookInput", {
  isAbstract: true,
})
export class NoteCreateOrConnectWithoutNotebookInput {
  @TypeGraphQL.Field((_type) => NoteWhereUniqueInput, {
    nullable: false,
  })
  where!: NoteWhereUniqueInput;

  @TypeGraphQL.Field((_type) => NoteCreateWithoutNotebookInput, {
    nullable: false,
  })
  create!: NoteCreateWithoutNotebookInput;
}
