import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { NoteCreateNestedManyWithoutNotebookInput } from "../inputs/NoteCreateNestedManyWithoutNotebookInput";
import { UserCreateNestedOneWithoutNotebooksInput } from "../inputs/UserCreateNestedOneWithoutNotebooksInput";

@TypeGraphQL.InputType("NotebookCreateWithoutUserPermissionsInput", {
  isAbstract: true,
})
export class NotebookCreateWithoutUserPermissionsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  isPublic?: boolean | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description?: string | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutNotebooksInput, {
    nullable: false,
  })
  owner!: UserCreateNestedOneWithoutNotebooksInput;

  @TypeGraphQL.Field((_type) => NoteCreateNestedManyWithoutNotebookInput, {
    nullable: true,
  })
  notes?: NoteCreateNestedManyWithoutNotebookInput | undefined;
}
