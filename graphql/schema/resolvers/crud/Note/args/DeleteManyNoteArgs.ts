import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteWhereInput } from "../../../inputs/NoteWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNoteArgs {
  @TypeGraphQL.Field(() => NoteWhereInput, { nullable: true })
  where?: NoteWhereInput | undefined;
}
