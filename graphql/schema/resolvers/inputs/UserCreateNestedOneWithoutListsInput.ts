import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutListsInput } from "../inputs/UserCreateOrConnectWithoutListsInput";
import { UserCreateWithoutListsInput } from "../inputs/UserCreateWithoutListsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutListsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutListsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutListsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutListsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutListsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutListsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
