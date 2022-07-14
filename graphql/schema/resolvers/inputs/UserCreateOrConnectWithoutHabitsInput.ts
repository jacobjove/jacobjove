import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutHabitsInput } from "../inputs/UserCreateWithoutHabitsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutHabitsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutHabitsInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutHabitsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutHabitsInput;
}
