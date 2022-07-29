import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutValuesInput } from "../inputs/UserCreateOrConnectWithoutValuesInput";
import { UserCreateWithoutValuesInput } from "../inputs/UserCreateWithoutValuesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutValuesInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutValuesInput {
  @TypeGraphQL.Field(() => UserCreateWithoutValuesInput, { nullable: true })
  create?: UserCreateWithoutValuesInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutValuesInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutValuesInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
