import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutIdentitiesInput } from "../inputs/UserCreateOrConnectWithoutIdentitiesInput";
import { UserCreateWithoutIdentitiesInput } from "../inputs/UserCreateWithoutIdentitiesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutIdentitiesInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutIdentitiesInput {
  @TypeGraphQL.Field(() => UserCreateWithoutIdentitiesInput, { nullable: true })
  create?: UserCreateWithoutIdentitiesInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutIdentitiesInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutIdentitiesInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
