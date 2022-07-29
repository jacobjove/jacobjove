import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutNotebookPermissionsInput } from "../inputs/UserCreateOrConnectWithoutNotebookPermissionsInput";
import { UserCreateWithoutNotebookPermissionsInput } from "../inputs/UserCreateWithoutNotebookPermissionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutNotebookPermissionsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutNotebookPermissionsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutNotebookPermissionsInput, { nullable: true })
  create?: UserCreateWithoutNotebookPermissionsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutNotebookPermissionsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutNotebookPermissionsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
