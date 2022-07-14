import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutBookReviewsInput } from "../inputs/UserCreateWithoutBookReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutBookReviewsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutBookReviewsInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutBookReviewsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutBookReviewsInput;
}
