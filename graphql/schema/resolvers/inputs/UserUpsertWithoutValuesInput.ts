import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutValuesInput } from "../inputs/UserCreateWithoutValuesInput";
import { UserUpdateWithoutValuesInput } from "../inputs/UserUpdateWithoutValuesInput";

@TypeGraphQL.InputType("UserUpsertWithoutValuesInput", {
  isAbstract: true,
})
export class UserUpsertWithoutValuesInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutValuesInput, { nullable: false })
  update!: UserUpdateWithoutValuesInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutValuesInput, { nullable: false })
  create!: UserCreateWithoutValuesInput;
}
