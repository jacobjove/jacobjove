import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutValuesInput } from "../inputs/UserCreateWithoutValuesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutValuesInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutValuesInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutValuesInput, {
    nullable: false,
  })
  create!: UserCreateWithoutValuesInput;
}
