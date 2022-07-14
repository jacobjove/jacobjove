import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutBookshelvesInput } from "../inputs/UserCreateOrConnectWithoutBookshelvesInput";
import { UserCreateWithoutBookshelvesInput } from "../inputs/UserCreateWithoutBookshelvesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBookshelvesInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutBookshelvesInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutBookshelvesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutBookshelvesInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutBookshelvesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookshelvesInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
