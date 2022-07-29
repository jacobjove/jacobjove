import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutValuesInput } from "../inputs/UserCreateWithoutValuesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutValuesInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutValuesInput {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(() => UserCreateWithoutValuesInput, { nullable: false })
  create!: UserCreateWithoutValuesInput;
}
