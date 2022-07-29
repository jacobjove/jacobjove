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
  @TypeGraphQL.Field((_type) => UserCreateWithoutValuesInput, { nullable: true })
  create?: UserCreateWithoutValuesInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutValuesInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutValuesInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutValuesInput, { nullable: true })
  upsert?: UserUpsertWithoutValuesInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutValuesInput, { nullable: true })
  update?: UserUpdateWithoutValuesInput | undefined;
}
