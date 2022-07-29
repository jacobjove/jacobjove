import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutBookshelvesInput } from "../inputs/UserCreateWithoutBookshelvesInput";
import { UserUpdateWithoutBookshelvesInput } from "../inputs/UserUpdateWithoutBookshelvesInput";

@TypeGraphQL.InputType("UserUpsertWithoutBookshelvesInput", {
  isAbstract: true,
})
export class UserUpsertWithoutBookshelvesInput {
  @TypeGraphQL.Field(() => UserUpdateWithoutBookshelvesInput, { nullable: false })
  update!: UserUpdateWithoutBookshelvesInput;

  @TypeGraphQL.Field(() => UserCreateWithoutBookshelvesInput, { nullable: false })
  create!: UserCreateWithoutBookshelvesInput;
}
