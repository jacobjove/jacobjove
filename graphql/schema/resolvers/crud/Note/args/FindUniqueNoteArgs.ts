import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteWhereUniqueInput } from "../../../inputs/NoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNoteArgs {
  @TypeGraphQL.Field(() => NoteWhereUniqueInput, { nullable: false })
  where!: NoteWhereUniqueInput;
}
