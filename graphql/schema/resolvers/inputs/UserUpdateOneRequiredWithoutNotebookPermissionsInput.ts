import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutNotebookPermissionsInput } from "../inputs/UserCreateOrConnectWithoutNotebookPermissionsInput";
import { UserCreateWithoutNotebookPermissionsInput } from "../inputs/UserCreateWithoutNotebookPermissionsInput";
import { UserUpdateWithoutNotebookPermissionsInput } from "../inputs/UserUpdateWithoutNotebookPermissionsInput";
import { UserUpsertWithoutNotebookPermissionsInput } from "../inputs/UserUpsertWithoutNotebookPermissionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutNotebookPermissionsInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutNotebookPermissionsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutNotebookPermissionsInput, { nullable: true })
  create?: UserCreateWithoutNotebookPermissionsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutNotebookPermissionsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutNotebookPermissionsInput | undefined;

  @TypeGraphQL.Field(() => UserUpsertWithoutNotebookPermissionsInput, { nullable: true })
  upsert?: UserUpsertWithoutNotebookPermissionsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateWithoutNotebookPermissionsInput, { nullable: true })
  update?: UserUpdateWithoutNotebookPermissionsInput | undefined;
}
