import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutIdentitiesInput } from "../inputs/UserCreateOrConnectWithoutIdentitiesInput";
import { UserCreateWithoutIdentitiesInput } from "../inputs/UserCreateWithoutIdentitiesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutIdentitiesInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutIdentitiesInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutIdentitiesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutIdentitiesInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutIdentitiesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutIdentitiesInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
