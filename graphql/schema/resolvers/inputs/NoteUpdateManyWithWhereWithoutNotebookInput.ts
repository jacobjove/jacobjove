import * as TypeGraphQL from "type-graphql";
import { NoteScalarWhereInput } from "../inputs/NoteScalarWhereInput";
import { NoteUpdateManyMutationInput } from "../inputs/NoteUpdateManyMutationInput";

@TypeGraphQL.InputType("NoteUpdateManyWithWhereWithoutNotebookInput", {
  isAbstract: true,
})
export class NoteUpdateManyWithWhereWithoutNotebookInput {
  @TypeGraphQL.Field((_type) => NoteScalarWhereInput, {
    nullable: false,
  })
  where!: NoteScalarWhereInput;

  @TypeGraphQL.Field((_type) => NoteUpdateManyMutationInput, {
    nullable: false,
  })
  data!: NoteUpdateManyMutationInput;
}
