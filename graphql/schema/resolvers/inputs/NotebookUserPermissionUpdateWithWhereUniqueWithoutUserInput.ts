import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionUpdateWithoutUserInput } from "../inputs/NotebookUserPermissionUpdateWithoutUserInput";
import { NotebookUserPermissionWhereUniqueInput } from "../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereUniqueInput, { nullable: false })
  where!: NotebookUserPermissionWhereUniqueInput;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionUpdateWithoutUserInput, { nullable: false })
  data!: NotebookUserPermissionUpdateWithoutUserInput;
}
