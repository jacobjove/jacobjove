import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutNotebookPermissionsInput } from "../inputs/UserCreateOrConnectWithoutNotebookPermissionsInput";
import { UserCreateWithoutNotebookPermissionsInput } from "../inputs/UserCreateWithoutNotebookPermissionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutNotebookPermissionsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutNotebookPermissionsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutNotebookPermissionsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutNotebookPermissionsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutNotebookPermissionsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutNotebookPermissionsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
