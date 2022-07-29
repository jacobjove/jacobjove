import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutBookReviewsInput } from "../inputs/UserCreateWithoutBookReviewsInput";
import { UserUpdateWithoutBookReviewsInput } from "../inputs/UserUpdateWithoutBookReviewsInput";

@TypeGraphQL.InputType("UserUpsertWithoutBookReviewsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutBookReviewsInput {
  @TypeGraphQL.Field(() => UserUpdateWithoutBookReviewsInput, { nullable: false })
  update!: UserUpdateWithoutBookReviewsInput;

  @TypeGraphQL.Field(() => UserCreateWithoutBookReviewsInput, { nullable: false })
  create!: UserCreateWithoutBookReviewsInput;
}
