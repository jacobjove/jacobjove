import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutBookReviewsInput } from "../inputs/UserCreateOrConnectWithoutBookReviewsInput";
import { UserCreateWithoutBookReviewsInput } from "../inputs/UserCreateWithoutBookReviewsInput";
import { UserUpdateWithoutBookReviewsInput } from "../inputs/UserUpdateWithoutBookReviewsInput";
import { UserUpsertWithoutBookReviewsInput } from "../inputs/UserUpsertWithoutBookReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBookReviewsInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutBookReviewsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutBookReviewsInput, { nullable: true })
  create?: UserCreateWithoutBookReviewsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutBookReviewsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutBookReviewsInput | undefined;

  @TypeGraphQL.Field(() => UserUpsertWithoutBookReviewsInput, { nullable: true })
  upsert?: UserUpsertWithoutBookReviewsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateWithoutBookReviewsInput, { nullable: true })
  update?: UserUpdateWithoutBookReviewsInput | undefined;
}
