import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutBeliefsInput } from "../inputs/UserCreateWithoutBeliefsInput";
import { UserUpdateWithoutBeliefsInput } from "../inputs/UserUpdateWithoutBeliefsInput";

@TypeGraphQL.InputType("UserUpsertWithoutBeliefsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutBeliefsInput {
  @TypeGraphQL.Field(() => UserUpdateWithoutBeliefsInput, { nullable: false })
  update!: UserUpdateWithoutBeliefsInput;

  @TypeGraphQL.Field(() => UserCreateWithoutBeliefsInput, { nullable: false })
  create!: UserCreateWithoutBeliefsInput;
}
