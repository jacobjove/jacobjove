import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { NotebookCreateNestedOneWithoutUserPermissionsInput } from "../inputs/NotebookCreateNestedOneWithoutUserPermissionsInput";
import { UserCreateNestedOneWithoutNotebookPermissionsInput } from "../inputs/UserCreateNestedOneWithoutNotebookPermissionsInput";

@TypeGraphQL.InputType("NotebookUserPermissionCreateInput", {
  isAbstract: true,
})
export class NotebookUserPermissionCreateInput {
  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutNotebookPermissionsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutNotebookPermissionsInput;

  @TypeGraphQL.Field((_type) => NotebookCreateNestedOneWithoutUserPermissionsInput, {
    nullable: false,
  })
  notebook!: NotebookCreateNestedOneWithoutUserPermissionsInput;
}
