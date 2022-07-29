import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutMantrasInput } from "../inputs/UserCreateWithoutMantrasInput";
import { UserUpdateWithoutMantrasInput } from "../inputs/UserUpdateWithoutMantrasInput";

@TypeGraphQL.InputType("UserUpsertWithoutMantrasInput", {
  isAbstract: true,
})
export class UserUpsertWithoutMantrasInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutMantrasInput, { nullable: false })
  update!: UserUpdateWithoutMantrasInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutMantrasInput, { nullable: false })
  create!: UserCreateWithoutMantrasInput;
}
