import * as TypeGraphQL from "type-graphql";
import { NoteWhereInput } from "../../../inputs/NoteWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNoteArgs {
  @TypeGraphQL.Field((_type) => NoteWhereInput, {
    nullable: true,
  })
  where?: NoteWhereInput | undefined;
}
