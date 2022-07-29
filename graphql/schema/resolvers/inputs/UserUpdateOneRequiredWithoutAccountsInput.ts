import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutAccountsInput } from "../inputs/UserCreateOrConnectWithoutAccountsInput";
import { UserCreateWithoutAccountsInput } from "../inputs/UserCreateWithoutAccountsInput";
import { UserUpdateWithoutAccountsInput } from "../inputs/UserUpdateWithoutAccountsInput";
import { UserUpsertWithoutAccountsInput } from "../inputs/UserUpsertWithoutAccountsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAccountsInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutAccountsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutAccountsInput, { nullable: true })
  create?: UserCreateWithoutAccountsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutAccountsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutAccountsInput | undefined;

  @TypeGraphQL.Field(() => UserUpsertWithoutAccountsInput, { nullable: true })
  upsert?: UserUpsertWithoutAccountsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateWithoutAccountsInput, { nullable: true })
  update?: UserUpdateWithoutAccountsInput | undefined;
}
