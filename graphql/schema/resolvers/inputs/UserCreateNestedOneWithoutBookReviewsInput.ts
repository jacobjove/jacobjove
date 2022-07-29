import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutBookReviewsInput } from "../inputs/UserCreateOrConnectWithoutBookReviewsInput";
import { UserCreateWithoutBookReviewsInput } from "../inputs/UserCreateWithoutBookReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBookReviewsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutBookReviewsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutBookReviewsInput, { nullable: true })
  create?: UserCreateWithoutBookReviewsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutBookReviewsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutBookReviewsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
