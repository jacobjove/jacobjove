import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { NotebookCreateNestedOneWithoutNotesInput } from "../inputs/NotebookCreateNestedOneWithoutNotesInput";

@TypeGraphQL.InputType("NoteCreateInput", {
  isAbstract: true,
})
export class NoteCreateInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  title?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  body?: string | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isPublic?: boolean | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => NotebookCreateNestedOneWithoutNotesInput, { nullable: false })
  notebook!: NotebookCreateNestedOneWithoutNotesInput;
}
