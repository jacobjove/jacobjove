import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutNotebooksInput } from "../inputs/UserCreateOrConnectWithoutNotebooksInput";
import { UserCreateWithoutNotebooksInput } from "../inputs/UserCreateWithoutNotebooksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutNotebooksInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutNotebooksInput {
  @TypeGraphQL.Field(() => UserCreateWithoutNotebooksInput, { nullable: true })
  create?: UserCreateWithoutNotebooksInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutNotebooksInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutNotebooksInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
