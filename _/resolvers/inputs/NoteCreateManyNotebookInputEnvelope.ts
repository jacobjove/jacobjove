import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteCreateManyNotebookInput } from "../inputs/NoteCreateManyNotebookInput";

@TypeGraphQL.InputType("NoteCreateManyNotebookInputEnvelope", { isAbstract: true })
export class NoteCreateManyNotebookInputEnvelope {
  @TypeGraphQL.Field(() => [NoteCreateManyNotebookInput], { nullable: false })
  data!: NoteCreateManyNotebookInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
