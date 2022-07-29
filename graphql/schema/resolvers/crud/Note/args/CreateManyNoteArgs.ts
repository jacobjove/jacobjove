import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteCreateManyInput } from "../../../inputs/NoteCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNoteArgs {
  @TypeGraphQL.Field(() => [NoteCreateManyInput], { nullable: false })
  data!: NoteCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
