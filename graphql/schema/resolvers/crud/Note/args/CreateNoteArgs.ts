import * as TypeGraphQL from "type-graphql";
import { NoteCreateInput } from "../../../inputs/NoteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateNoteArgs {
  @TypeGraphQL.Field((_type) => NoteCreateInput, {
    nullable: false,
  })
  data!: NoteCreateInput;
}
