import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { NotebookCreateNestedOneWithoutUserPermissionsInput } from "../inputs/NotebookCreateNestedOneWithoutUserPermissionsInput";
import { UserCreateNestedOneWithoutNotebookPermissionsInput } from "../inputs/UserCreateNestedOneWithoutNotebookPermissionsInput";

@TypeGraphQL.InputType("NotebookUserPermissionCreateInput", {
  isAbstract: true,
})
export class NotebookUserPermissionCreateInput {
  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | undefined;

  @TypeGraphQL.Field(() => UserCreateNestedOneWithoutNotebookPermissionsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutNotebookPermissionsInput;

  @TypeGraphQL.Field(() => NotebookCreateNestedOneWithoutUserPermissionsInput, {
    nullable: false,
  })
  notebook!: NotebookCreateNestedOneWithoutUserPermissionsInput;
}
