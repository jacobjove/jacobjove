import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutMantrasInput } from "../inputs/UserCreateOrConnectWithoutMantrasInput";
import { UserCreateWithoutMantrasInput } from "../inputs/UserCreateWithoutMantrasInput";
import { UserUpdateWithoutMantrasInput } from "../inputs/UserUpdateWithoutMantrasInput";
import { UserUpsertWithoutMantrasInput } from "../inputs/UserUpsertWithoutMantrasInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutMantrasInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutMantrasInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutMantrasInput, {
    nullable: true,
  })
  create?: UserCreateWithoutMantrasInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutMantrasInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutMantrasInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutMantrasInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutMantrasInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutMantrasInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutMantrasInput | undefined;
}
