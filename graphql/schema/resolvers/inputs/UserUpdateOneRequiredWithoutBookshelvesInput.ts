import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutBookshelvesInput } from "../inputs/UserCreateOrConnectWithoutBookshelvesInput";
import { UserCreateWithoutBookshelvesInput } from "../inputs/UserCreateWithoutBookshelvesInput";
import { UserUpdateWithoutBookshelvesInput } from "../inputs/UserUpdateWithoutBookshelvesInput";
import { UserUpsertWithoutBookshelvesInput } from "../inputs/UserUpsertWithoutBookshelvesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBookshelvesInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutBookshelvesInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutBookshelvesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutBookshelvesInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutBookshelvesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookshelvesInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutBookshelvesInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutBookshelvesInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutBookshelvesInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutBookshelvesInput | undefined;
}
