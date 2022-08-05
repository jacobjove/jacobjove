import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUpdateOneRequiredWithoutNotesInput } from "../inputs/NotebookUpdateOneRequiredWithoutNotesInput";

@TypeGraphQL.InputType("NoteUpdateInput", { isAbstract: true })
export class NoteUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  title?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  body?: string | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public?: boolean | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => NotebookUpdateOneRequiredWithoutNotesInput, { nullable: true })
  notebook?: NotebookUpdateOneRequiredWithoutNotesInput | undefined;
}
