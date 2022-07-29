import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutListsInput } from "../inputs/UserCreateOrConnectWithoutListsInput";
import { UserCreateWithoutListsInput } from "../inputs/UserCreateWithoutListsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutListsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutListsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutListsInput, { nullable: true })
  create?: UserCreateWithoutListsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutListsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutListsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
