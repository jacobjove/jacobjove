import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutNotebookPermissionsInput } from "../inputs/UserCreateOrConnectWithoutNotebookPermissionsInput";
import { UserCreateWithoutNotebookPermissionsInput } from "../inputs/UserCreateWithoutNotebookPermissionsInput";
import { UserUpdateWithoutNotebookPermissionsInput } from "../inputs/UserUpdateWithoutNotebookPermissionsInput";
import { UserUpsertWithoutNotebookPermissionsInput } from "../inputs/UserUpsertWithoutNotebookPermissionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutNotebookPermissionsInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutNotebookPermissionsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutNotebookPermissionsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutNotebookPermissionsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutNotebookPermissionsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutNotebookPermissionsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutNotebookPermissionsInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutNotebookPermissionsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutNotebookPermissionsInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutNotebookPermissionsInput | undefined;
}
