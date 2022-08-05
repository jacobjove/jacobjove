import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteUpdateWithoutNotebookInput } from "../inputs/NoteUpdateWithoutNotebookInput";
import { NoteWhereUniqueInput } from "../inputs/NoteWhereUniqueInput";

@TypeGraphQL.InputType("NoteUpdateWithWhereUniqueWithoutNotebookInput", { isAbstract: true })
export class NoteUpdateWithWhereUniqueWithoutNotebookInput {
  @TypeGraphQL.Field(() => NoteWhereUniqueInput, { nullable: false })
  where!: NoteWhereUniqueInput;

  @TypeGraphQL.Field(() => NoteUpdateWithoutNotebookInput, { nullable: false })
  data!: NoteUpdateWithoutNotebookInput;
}
