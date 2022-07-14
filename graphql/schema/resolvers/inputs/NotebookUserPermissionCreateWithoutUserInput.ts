import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { NotebookCreateNestedOneWithoutUserPermissionsInput } from "../inputs/NotebookCreateNestedOneWithoutUserPermissionsInput";

@TypeGraphQL.InputType("NotebookUserPermissionCreateWithoutUserInput", {
  isAbstract: true,
})
export class NotebookUserPermissionCreateWithoutUserInput {
  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => NotebookCreateNestedOneWithoutUserPermissionsInput, {
    nullable: false,
  })
  notebook!: NotebookCreateNestedOneWithoutUserPermissionsInput;
}
