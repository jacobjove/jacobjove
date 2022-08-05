import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionCreateWithoutUserInput } from "../inputs/NotebookUserPermissionCreateWithoutUserInput";
import { NotebookUserPermissionWhereUniqueInput } from "../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUserPermissionCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class NotebookUserPermissionCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(() => NotebookUserPermissionWhereUniqueInput, { nullable: false })
  where!: NotebookUserPermissionWhereUniqueInput;

  @TypeGraphQL.Field(() => NotebookUserPermissionCreateWithoutUserInput, { nullable: false })
  create!: NotebookUserPermissionCreateWithoutUserInput;
}
