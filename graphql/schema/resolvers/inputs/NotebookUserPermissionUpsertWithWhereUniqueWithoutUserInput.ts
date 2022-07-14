import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionCreateWithoutUserInput } from "../inputs/NotebookUserPermissionCreateWithoutUserInput";
import { NotebookUserPermissionUpdateWithoutUserInput } from "../inputs/NotebookUserPermissionUpdateWithoutUserInput";
import { NotebookUserPermissionWhereUniqueInput } from "../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereUniqueInput, {
    nullable: false,
  })
  where!: NotebookUserPermissionWhereUniqueInput;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: NotebookUserPermissionUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionCreateWithoutUserInput, {
    nullable: false,
  })
  create!: NotebookUserPermissionCreateWithoutUserInput;
}
