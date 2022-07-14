import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutBookshelvesInput } from "../inputs/UserCreateWithoutBookshelvesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutBookshelvesInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutBookshelvesInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutBookshelvesInput, {
    nullable: false,
  })
  create!: UserCreateWithoutBookshelvesInput;
}
