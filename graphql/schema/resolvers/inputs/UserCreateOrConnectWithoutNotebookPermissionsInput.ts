import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutNotebookPermissionsInput } from "../inputs/UserCreateWithoutNotebookPermissionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutNotebookPermissionsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutNotebookPermissionsInput {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(() => UserCreateWithoutNotebookPermissionsInput, { nullable: false })
  create!: UserCreateWithoutNotebookPermissionsInput;
}
