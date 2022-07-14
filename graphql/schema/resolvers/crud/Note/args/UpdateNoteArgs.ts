import * as TypeGraphQL from "type-graphql";
import { NoteUpdateInput } from "../../../inputs/NoteUpdateInput";
import { NoteWhereUniqueInput } from "../../../inputs/NoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateNoteArgs {
  @TypeGraphQL.Field((_type) => NoteUpdateInput, {
    nullable: false,
  })
  data!: NoteUpdateInput;

  @TypeGraphQL.Field((_type) => NoteWhereUniqueInput, {
    nullable: false,
  })
  where!: NoteWhereUniqueInput;
}
