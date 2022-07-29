import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { NotebookUserPermissionCreateNestedManyWithoutNotebookInput } from "../inputs/NotebookUserPermissionCreateNestedManyWithoutNotebookInput";
import { NoteCreateNestedManyWithoutNotebookInput } from "../inputs/NoteCreateNestedManyWithoutNotebookInput";

@TypeGraphQL.InputType("NotebookCreateWithoutOwnerInput", {
  isAbstract: true,
})
export class NotebookCreateWithoutOwnerInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isPublic?: boolean | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => NoteCreateNestedManyWithoutNotebookInput, { nullable: true })
  notes?: NoteCreateNestedManyWithoutNotebookInput | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionCreateNestedManyWithoutNotebookInput, {
    nullable: true,
  })
  userPermissions?: NotebookUserPermissionCreateNestedManyWithoutNotebookInput | undefined;
}
