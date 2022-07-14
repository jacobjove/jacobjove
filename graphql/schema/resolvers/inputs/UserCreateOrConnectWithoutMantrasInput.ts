import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutMantrasInput } from "../inputs/UserCreateWithoutMantrasInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutMantrasInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutMantrasInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutMantrasInput, {
    nullable: false,
  })
  create!: UserCreateWithoutMantrasInput;
}
