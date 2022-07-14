import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutBookReviewsInput } from "../inputs/UserCreateOrConnectWithoutBookReviewsInput";
import { UserCreateWithoutBookReviewsInput } from "../inputs/UserCreateWithoutBookReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBookReviewsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutBookReviewsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutBookReviewsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutBookReviewsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutBookReviewsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookReviewsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
