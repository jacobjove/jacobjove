import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateWithoutUserPermissionsInput } from "../inputs/NotebookCreateWithoutUserPermissionsInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookCreateOrConnectWithoutUserPermissionsInput", {
  isAbstract: true,
})
export class NotebookCreateOrConnectWithoutUserPermissionsInput {
  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, { nullable: false })
  where!: NotebookWhereUniqueInput;

  @TypeGraphQL.Field((_type) => NotebookCreateWithoutUserPermissionsInput, { nullable: false })
  create!: NotebookCreateWithoutUserPermissionsInput;
}
