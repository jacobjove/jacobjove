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
  @TypeGraphQL.Field((_type) => UserCreateWithoutBookReviewsInput, { nullable: true })
  create?: UserCreateWithoutBookReviewsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutBookReviewsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutBookReviewsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutBookReviewsInput, { nullable: true })
  upsert?: UserUpsertWithoutBookReviewsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutBookReviewsInput, { nullable: true })
  update?: UserUpdateWithoutBookReviewsInput | undefined;
}
