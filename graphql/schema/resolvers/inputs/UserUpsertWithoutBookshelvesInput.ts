import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutBookshelvesInput } from "../inputs/UserCreateWithoutBookshelvesInput";
import { UserUpdateWithoutBookshelvesInput } from "../inputs/UserUpdateWithoutBookshelvesInput";

@TypeGraphQL.InputType("UserUpsertWithoutBookshelvesInput", {
  isAbstract: true,
})
export class UserUpsertWithoutBookshelvesInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutBookshelvesInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutBookshelvesInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutBookshelvesInput, {
    nullable: false,
  })
  create!: UserCreateWithoutBookshelvesInput;
}
