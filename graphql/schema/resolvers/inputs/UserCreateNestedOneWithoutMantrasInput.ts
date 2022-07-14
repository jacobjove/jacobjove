import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutMantrasInput } from "../inputs/UserCreateOrConnectWithoutMantrasInput";
import { UserCreateWithoutMantrasInput } from "../inputs/UserCreateWithoutMantrasInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutMantrasInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutMantrasInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutMantrasInput, {
    nullable: true,
  })
  create?: UserCreateWithoutMantrasInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutMantrasInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutMantrasInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
