import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteCreateInput } from "../../../inputs/NoteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateNoteArgs {
  @TypeGraphQL.Field(() => NoteCreateInput, { nullable: false })
  data!: NoteCreateInput;
}
