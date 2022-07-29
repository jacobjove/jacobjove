import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteCreateManyInput } from "../../../inputs/NoteCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNoteArgs {
  @TypeGraphQL.Field((_type) => [NoteCreateManyInput], { nullable: false })
  data!: NoteCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
