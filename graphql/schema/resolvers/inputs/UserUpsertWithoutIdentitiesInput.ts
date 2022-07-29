import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutIdentitiesInput } from "../inputs/UserCreateWithoutIdentitiesInput";
import { UserUpdateWithoutIdentitiesInput } from "../inputs/UserUpdateWithoutIdentitiesInput";

@TypeGraphQL.InputType("UserUpsertWithoutIdentitiesInput", {
  isAbstract: true,
})
export class UserUpsertWithoutIdentitiesInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutIdentitiesInput, { nullable: false })
  update!: UserUpdateWithoutIdentitiesInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutIdentitiesInput, { nullable: false })
  create!: UserCreateWithoutIdentitiesInput;
}
