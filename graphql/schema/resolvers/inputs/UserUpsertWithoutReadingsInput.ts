import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutReadingsInput } from "../inputs/UserCreateWithoutReadingsInput";
import { UserUpdateWithoutReadingsInput } from "../inputs/UserUpdateWithoutReadingsInput";

@TypeGraphQL.InputType("UserUpsertWithoutReadingsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutReadingsInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutReadingsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutReadingsInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutReadingsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutReadingsInput;
}
