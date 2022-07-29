import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteCreateWithoutNotebookInput } from "../inputs/NoteCreateWithoutNotebookInput";
import { NoteWhereUniqueInput } from "../inputs/NoteWhereUniqueInput";

@TypeGraphQL.InputType("NoteCreateOrConnectWithoutNotebookInput", {
  isAbstract: true,
})
export class NoteCreateOrConnectWithoutNotebookInput {
  @TypeGraphQL.Field(() => NoteWhereUniqueInput, { nullable: false })
  where!: NoteWhereUniqueInput;

  @TypeGraphQL.Field(() => NoteCreateWithoutNotebookInput, { nullable: false })
  create!: NoteCreateWithoutNotebookInput;
}
