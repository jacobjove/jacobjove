import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutBookshelvesInput } from "../inputs/UserCreateOrConnectWithoutBookshelvesInput";
import { UserCreateWithoutBookshelvesInput } from "../inputs/UserCreateWithoutBookshelvesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBookshelvesInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutBookshelvesInput {
  @TypeGraphQL.Field(() => UserCreateWithoutBookshelvesInput, { nullable: true })
  create?: UserCreateWithoutBookshelvesInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutBookshelvesInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutBookshelvesInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
