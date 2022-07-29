import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteCreateInput } from "../../../inputs/NoteCreateInput";
import { NoteUpdateInput } from "../../../inputs/NoteUpdateInput";
import { NoteWhereUniqueInput } from "../../../inputs/NoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertNoteArgs {
  @TypeGraphQL.Field(() => NoteWhereUniqueInput, { nullable: false })
  where!: NoteWhereUniqueInput;

  @TypeGraphQL.Field(() => NoteCreateInput, { nullable: false })
  create!: NoteCreateInput;

  @TypeGraphQL.Field(() => NoteUpdateInput, { nullable: false })
  update!: NoteUpdateInput;
}
