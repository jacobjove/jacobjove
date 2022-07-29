import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutValuesInput } from "../inputs/UserCreateOrConnectWithoutValuesInput";
import { UserCreateWithoutValuesInput } from "../inputs/UserCreateWithoutValuesInput";
import { UserUpdateWithoutValuesInput } from "../inputs/UserUpdateWithoutValuesInput";
import { UserUpsertWithoutValuesInput } from "../inputs/UserUpsertWithoutValuesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutValuesInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutValuesInput {
  @TypeGraphQL.Field(() => UserCreateWithoutValuesInput, { nullable: true })
  create?: UserCreateWithoutValuesInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutValuesInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutValuesInput | undefined;

  @TypeGraphQL.Field(() => UserUpsertWithoutValuesInput, { nullable: true })
  upsert?: UserUpsertWithoutValuesInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateWithoutValuesInput, { nullable: true })
  update?: UserUpdateWithoutValuesInput | undefined;
}
