import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteCreateInput } from "../../../inputs/NoteCreateInput";
import { NoteUpdateInput } from "../../../inputs/NoteUpdateInput";
import { NoteWhereUniqueInput } from "../../../inputs/NoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertNoteArgs {
  @TypeGraphQL.Field((_type) => NoteWhereUniqueInput, { nullable: false })
  where!: NoteWhereUniqueInput;

  @TypeGraphQL.Field((_type) => NoteCreateInput, { nullable: false })
  create!: NoteCreateInput;

  @TypeGraphQL.Field((_type) => NoteUpdateInput, { nullable: false })
  update!: NoteUpdateInput;
}
