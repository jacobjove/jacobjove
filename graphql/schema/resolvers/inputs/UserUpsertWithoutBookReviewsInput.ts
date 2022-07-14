import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutBookReviewsInput } from "../inputs/UserCreateWithoutBookReviewsInput";
import { UserUpdateWithoutBookReviewsInput } from "../inputs/UserUpdateWithoutBookReviewsInput";

@TypeGraphQL.InputType("UserUpsertWithoutBookReviewsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutBookReviewsInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutBookReviewsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutBookReviewsInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutBookReviewsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutBookReviewsInput;
}
