import * as TypeGraphQL from "type-graphql";
import { NoteWhereUniqueInput } from "../../../inputs/NoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNoteArgs {
  @TypeGraphQL.Field((_type) => NoteWhereUniqueInput, {
    nullable: false,
  })
  where!: NoteWhereUniqueInput;
}
