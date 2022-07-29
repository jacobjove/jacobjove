import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutMantrasInput } from "../inputs/UserCreateWithoutMantrasInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutMantrasInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutMantrasInput {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(() => UserCreateWithoutMantrasInput, { nullable: false })
  create!: UserCreateWithoutMantrasInput;
}
