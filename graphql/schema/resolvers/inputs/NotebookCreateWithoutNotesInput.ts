import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { NotebookUserPermissionCreateNestedManyWithoutNotebookInput } from "../inputs/NotebookUserPermissionCreateNestedManyWithoutNotebookInput";
import { UserCreateNestedOneWithoutNotebooksInput } from "../inputs/UserCreateNestedOneWithoutNotebooksInput";

@TypeGraphQL.InputType("NotebookCreateWithoutNotesInput", {
  isAbstract: true,
})
export class NotebookCreateWithoutNotesInput {
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

  @TypeGraphQL.Field(() => UserCreateNestedOneWithoutNotebooksInput, { nullable: false })
  owner!: UserCreateNestedOneWithoutNotebooksInput;

  @TypeGraphQL.Field(() => NotebookUserPermissionCreateNestedManyWithoutNotebookInput, {
    nullable: true,
  })
  userPermissions?: NotebookUserPermissionCreateNestedManyWithoutNotebookInput | undefined;
}
