import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutAccountsInput } from "../inputs/UserCreateOrConnectWithoutAccountsInput";
import { UserCreateWithoutAccountsInput } from "../inputs/UserCreateWithoutAccountsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutAccountsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutAccountsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutAccountsInput, { nullable: true })
  create?: UserCreateWithoutAccountsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutAccountsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutAccountsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
