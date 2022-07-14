import * as TypeGraphQL from "type-graphql";
import { NotebookCreateOrConnectWithoutUserPermissionsInput } from "../inputs/NotebookCreateOrConnectWithoutUserPermissionsInput";
import { NotebookCreateWithoutUserPermissionsInput } from "../inputs/NotebookCreateWithoutUserPermissionsInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookCreateNestedOneWithoutUserPermissionsInput", {
  isAbstract: true,
})
export class NotebookCreateNestedOneWithoutUserPermissionsInput {
  @TypeGraphQL.Field((_type) => NotebookCreateWithoutUserPermissionsInput, {
    nullable: true,
  })
  create?: NotebookCreateWithoutUserPermissionsInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookCreateOrConnectWithoutUserPermissionsInput, {
    nullable: true,
  })
  connectOrCreate?: NotebookCreateOrConnectWithoutUserPermissionsInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, {
    nullable: true,
  })
  connect?: NotebookWhereUniqueInput | undefined;
}
