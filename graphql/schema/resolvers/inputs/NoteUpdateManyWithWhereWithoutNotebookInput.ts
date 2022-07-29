import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteScalarWhereInput } from "../inputs/NoteScalarWhereInput";
import { NoteUpdateManyMutationInput } from "../inputs/NoteUpdateManyMutationInput";

@TypeGraphQL.InputType("NoteUpdateManyWithWhereWithoutNotebookInput", {
  isAbstract: true,
})
export class NoteUpdateManyWithWhereWithoutNotebookInput {
  @TypeGraphQL.Field(() => NoteScalarWhereInput, { nullable: false })
  where!: NoteScalarWhereInput;

  @TypeGraphQL.Field(() => NoteUpdateManyMutationInput, { nullable: false })
  data!: NoteUpdateManyMutationInput;
}
