import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutListsInput } from "../inputs/UserCreateWithoutListsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutListsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutListsInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutListsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutListsInput;
}
