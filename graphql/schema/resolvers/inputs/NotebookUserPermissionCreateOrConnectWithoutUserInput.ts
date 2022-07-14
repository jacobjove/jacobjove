import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionCreateWithoutUserInput } from "../inputs/NotebookUserPermissionCreateWithoutUserInput";
import { NotebookUserPermissionWhereUniqueInput } from "../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUserPermissionCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class NotebookUserPermissionCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereUniqueInput, {
    nullable: false,
  })
  where!: NotebookUserPermissionWhereUniqueInput;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionCreateWithoutUserInput, {
    nullable: false,
  })
  create!: NotebookUserPermissionCreateWithoutUserInput;
}
