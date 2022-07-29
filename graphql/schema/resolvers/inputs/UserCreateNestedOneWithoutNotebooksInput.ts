import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutNotebooksInput } from "../inputs/UserCreateOrConnectWithoutNotebooksInput";
import { UserCreateWithoutNotebooksInput } from "../inputs/UserCreateWithoutNotebooksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutNotebooksInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutNotebooksInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutNotebooksInput, { nullable: true })
  create?: UserCreateWithoutNotebooksInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutNotebooksInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutNotebooksInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
