import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutBeliefsInput } from "../inputs/UserCreateWithoutBeliefsInput";
import { UserUpdateWithoutBeliefsInput } from "../inputs/UserUpdateWithoutBeliefsInput";

@TypeGraphQL.InputType("UserUpsertWithoutBeliefsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutBeliefsInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutBeliefsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutBeliefsInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutBeliefsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutBeliefsInput;
}
