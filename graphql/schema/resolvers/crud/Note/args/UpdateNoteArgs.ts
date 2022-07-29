import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteUpdateInput } from "../../../inputs/NoteUpdateInput";
import { NoteWhereUniqueInput } from "../../../inputs/NoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateNoteArgs {
  @TypeGraphQL.Field(() => NoteUpdateInput, { nullable: false })
  data!: NoteUpdateInput;

  @TypeGraphQL.Field(() => NoteWhereUniqueInput, { nullable: false })
  where!: NoteWhereUniqueInput;
}
